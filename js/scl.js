const sevenNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const twelveNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A♯/B♭', 'C♯/D♭', 'D♯/E♭', 'F♯/G♭', 'G♯/A♭'];

const randomInt = (max) => { return Math.floor(Math.random() * max); }
const randomTone = (array, num) => { return array[num]; };

function changeTone() {
    let element = document.getElementById("tone");
    if (document.modeForm.mode.value == 'seven') {
        element.innerText = randomTone(sevenNotesArray, randomInt(sevenNotesArray.length));
    } else {
        element.innerText = randomTone(twelveNotesArray, randomInt(twelveNotesArray.length));
    }
}

window.onload = changeTone;