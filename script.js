let timerInterval;
let elapsedTime = 0;

const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function updateTime() {
    elapsedTime += 10;
    timeDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener('click', () => {
    timerInterval = setInterval(updateTime, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = formatTime(elapsedTime);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});
