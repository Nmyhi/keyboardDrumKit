window.addEventListener("keydown", keyListen);

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
    }

function keyListen(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
