const sevenNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const twelveNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A♯/B♭', 'C♯/D♭', 'D♯/E♭', 'F♯/G♭', 'G♯/A♭'];

const randomInt = (max) => { return Math.floor(Math.random() * max); }
const randomTone = (array, num) => { return array[num]; };

function changeTone() {
    if (document.modeForm.mode.value == 'seven') {
        document.getElementById("tone").innerText = randomTone(twelveNotesArray, randomInt(7));
    } else {
        document.getElementById("tone").innerText = randomTone(twelveNotesArray, randomInt(12));
    }
}

window.onload = changeTone;
