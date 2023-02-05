const trafLightRed = document.querySelector('#lightRed');
const trafLightYellow = document.querySelector('#lightYellow');
const trafLightGreen = document.querySelector('#lightGreen');


trafLightRed.addEventListener('click', makeRed);
function makeRed() {
    trafLightRed.style.background = ('red');
    trafLightYellow.style.background = ('black');
    trafLightGreen.style.background = ('black');

    // Listener remove
    trafLightRed.removeEventListener('click', makeRed);
    trafLightYellow.removeEventListener('click', makeRed);
    trafLightGreen.removeEventListener('click', makeRed);

    // Listener set
    trafLightRed.addEventListener('click', makeYellow);
    trafLightYellow.addEventListener('click', makeYellow);
    trafLightGreen.addEventListener('click', makeYellow);   
}

trafLightYellow.addEventListener('click', makeRed);
function makeYellow() {
   
    trafLightYellow.style.background = ('yellow');
    trafLightRed.style.background = ('black');
    trafLightGreen.style.background = ('black');

    // Listener remove
    trafLightRed.removeEventListener('click', makeYellow);
    trafLightYellow.removeEventListener('click', makeYellow);
    trafLightGreen.removeEventListener('click', makeYellow);

    // Listener set
    trafLightRed.addEventListener('click', makeGreen);
    trafLightYellow.addEventListener('click', makeGreen);
    trafLightGreen.addEventListener('click', makeGreen);
}

trafLightGreen.addEventListener('click', makeRed);
function makeGreen() {
    trafLightGreen.style.background = ('green');
    trafLightRed.style.background = ('black');
    trafLightYellow.style.background = ('black');

    // Listener remove
    trafLightRed.removeEventListener('click', makeGreen);
    trafLightYellow.removeEventListener('click', makeGreen);
    trafLightGreen.removeEventListener('click', makeGreen);

    // Listener set

    trafLightYellow.addEventListener('click', makeRed);
    trafLightRed.addEventListener('click', makeRed);
    trafLightGreen.addEventListener('click', makeRed);
}
