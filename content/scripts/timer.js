let timer;
let remainingTime;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        remainingTime = (hours * 3600) + (minutes * 60) + seconds;

        if (remainingTime > 0) {
            isRunning = true;
            document.getElementById('timer').innerText = formatTime(remainingTime);
            timer = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    document.getElementById('timer').innerText = formatTime(remainingTime);
                } else {
                    clearInterval(timer);
                    isRunning = false;
                }
            }, 1000);
        }
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