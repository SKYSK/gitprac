const sevenNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const twelveNotesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A♯/B♭', 'C♯/D♭', 'D♯/E♭', 'F♯/G♭', 'G♯/A♭'];

const randomInt = (max) => { return Math.floor(Math.random() * max); }
const randomNote = (array, num) => { return array[num]; };

function changeNote() {
    const noteElement = document.getElementById("note");
    const radioElements = document.getElementsByName("notesMode");
    for (const item of radioElements) {
        if (item.checked) {
            if (item.value == 'seven') {
                noteElement.innerText = randomNote(sevenNotesArray, randomInt(sevenNotesArray.length));
            } else {
                noteElement.innerText = randomNote(twelveNotesArray, randomInt(twelveNotesArray.length));
            }
            break;
        }
    }
}

window.onload = changeNote;