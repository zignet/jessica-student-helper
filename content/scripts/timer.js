let timer;
let remainingTime;
let isTimerRunning = false;

// Add event for when the page is loaded
document.addEventListener('DOMContentLoaded', initTimer, false)

function initTimer() {
    const startHours = parseInt(getLocalStorage("timerStartHours")) || 0;
    const startMinutes = parseInt(getLocalStorage("timerStartMinutes")) || 0;
    const startSeconds = parseInt(getLocalStorage("timerStartSeconds")) || 0;

    document.getElementById('hours').value = startHours;
    document.getElementById('minutes').value = startMinutes;
    document.getElementById('seconds').value = startSeconds;
}

function startTimer() {
    isTimerRunning = true;

    if (document.getElementById('timer').innerText === "00:00:00") {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;

        setLocalStorage("timerStartHours", hours.toString());
        setLocalStorage("timerStartMinutes", minutes.toString());
        setLocalStorage("timerStartSeconds", seconds.toString());

        remainingTime = (hours * 3600) + (minutes * 60) + seconds;

        if (remainingTime > 0) {
            document.getElementById('timer').innerText = formatTime(remainingTime);
            timer = setInterval(() => {
                timerTick()
            }, 1000);
        }
    }
}

function timerTick() {
    if (!isTimerRunning) {
        return
    }

    if (remainingTime > 0) {
        // Update the timer as long as there is time remaining
        remainingTime--;
        document.getElementById('timer').innerText = formatTime(remainingTime);
    } else {
        // Clear the timer and stop it when timer has reached zero
        clearInterval(timer);
        isTimerRunning = false;
    }
}

function pauseTimer() {
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById('timer').innerText = "00:00:00";
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}