//
// Javascripts for timer page
//

// local variables to the timer page
let timer;                      // the actual timer clock
let remainingTime;              // the amount of time left in seconds, decremented by 1
let isTimerRunning = false;     // a boolean indicating if timer is running or not

const TIME_HOURS = "timerHours"
const TIME_MINUTES = "timerMinutes"
const TIME_SECONDS = "timerSeconds"

// Add event for when the page is loaded
document.addEventListener('DOMContentLoaded', initTimer, false)

// called on load of the page and retreaves the timer values used previously
function initTimer() {
    // retreving values from local storage and converts from a string to an integer
    const startHours = parseInt(getLocalStorage(TIME_HOURS));
    const startMinutes = parseInt(getLocalStorage(TIME_MINUTES));
    const startSeconds = parseInt(getLocalStorage(TIME_SECONDS));
    
    if (startHours == null) startHours = 0
    if (startMinutes == null) startMinutes = 0
    if (startSeconds == null) startSeconds = 0
    
    // display values on timer page
    document.getElementById('hours').value = startHours;
    document.getElementById('minutes').value = startMinutes;
    document.getElementById('seconds').value = startSeconds;
}

// called when start button clicked
function startTimer() {
    isTimerRunning = true;

    // if the timer value is 00:00:00, the timer has not been started, has ended, or has been reset and now needs to be initialised
    if (document.getElementById('timer').innerText === "00:00:00") {
        const hours = parseInt(document.getElementById('hours').value);
        const minutes = parseInt(document.getElementById('minutes').value);
        const seconds = parseInt(document.getElementById('seconds').value);

        if (hours == null) hours = 0
        if (minutes == null) minutes = 0
        if (seconds == null) seconds = 0

        // numbers entered saved to local storage
        setLocalStorage(TIME_HOURS, hours.toString());
        setLocalStorage(TIME_MINUTES, minutes.toString());
        setLocalStorage(TIME_SECONDS, seconds.toString());

        remainingTime = (hours * 3600) + (minutes * 60) + seconds;

        if (remainingTime > 0) {
            document.getElementById('timer').innerText = formatTime(remainingTime);
            // initialises timer to tick every 1 second (1000 ms)
            timer = setInterval(() => {
                timerTick()
            }, 1000);
        }
    }
}

// called every second to handle tick event
function timerTick() {
    if (isTimerRunning) {
        if (remainingTime > 0) {
            // Update the timer as long as there is time remaining
            remainingTime--;
            document.getElementById('timer').innerText = formatTime(remainingTime);
        } 
        else {
            // Clear the timer and stop it when timer has reached zero
            clearInterval(timer);
            isTimerRunning = false;
        }
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

// formats the time remaining into a string hh:mm:ss
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}