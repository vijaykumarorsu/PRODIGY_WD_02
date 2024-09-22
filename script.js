
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

let timer;
let running = false;
let elapsedTime = 0;
let startTime = 0;


function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 1000);
    }
});


pauseButton.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
    }
});


resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    lapsList.innerHTML = ''; 
});


lapButton.addEventListener('click', () => {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        lapsList.appendChild(lapTime);
    }
});
