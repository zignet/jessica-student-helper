//
// global functions
//

// saves a value (task or time) to local storage in the browser
function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

// retreves the values stored in the browser
function getLocalStorage(name) {
    return localStorage.getItem(name);
}

// common function to play sound
function playSound(sound) {
    const sounddel = document.getElementById(sound);
    sounddel.play();
    sounddel.currentTime = 0;
}