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

    fadeIn(noteElement, 300); //durationはミリ秒で指定
}

function fadeIn(node, duration) {

    node.style.opacity = 0;
    const startTime = performance.now();

    requestAnimationFrame(function step(timestamp) {

        const progress = (timestamp - startTime) / duration;

        node.style.opacity = Math.min(progress, 1);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    });
}

window.onload = changeNote;