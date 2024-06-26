function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

function playSound(sound) {
    const sounddel = document.getElementById(sound);
    sounddel.play();
    sounddel.currentTime = 0;
}