let timer;
let remainingTime;
let isRunning = false;

// Add avent for when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTimer();
}, false)

function initTimer() {
    const startHours = parseInt(localStorage.getItem("timerStartHours")) || 0;
    const startMinutes = parseInt(localStorage.getItem("timerStartMinutes")) || 0;
    const startSeconds = parseInt(localStorage.getItem("timerStartSeconds")) || 0;

    document.getElementById('hours').value = startHours;
    document.getElementById('minutes').value = startMinutes;
    document.getElementById('seconds').value = startSeconds;
}

function startTimer() {
    if (!isRunning) {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;

        localStorage.setItem("timerStartHours", hours.toString());
        localStorage.setItem("timerStartMinutes", minutes.toString());
        localStorage.setItem("timerStartSeconds", seconds.toString());


        remainingTime = (hours * 3600) + (minutes * 60) + seconds;

        if (remainingTime > 0) {
            isRunning = true;
            document.getElementById('timer').innerText = formatTime(remainingTime);
            timer = setInterval(() => {
                timerTick()
            }, 1000);
        }
    }
}

function timerTick() {
    if (remainingTime > 0) {
        // Update the timer as long as there is time remaining
        remainingTime--;
        document.getElementById('timer').innerText = formatTime(remainingTime);
    } else {
        // Clear the timer and stop it when timer has reached zero
        clearInterval(timer);
        isRunning = false;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('timer').innerText = "00:00:00";
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}