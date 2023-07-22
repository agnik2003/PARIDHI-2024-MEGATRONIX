// changes made by poorva

import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party(){
    confetti();
}
document.getElementById('submit').addEventListener('click', party);