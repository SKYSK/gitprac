const sndArray = ['A','B','C','D','E','F','G','A♯/B♭','C♯/D♭','D♯/E♭','F♯/G♭','G♯/A♭']; 
const randomInt = (max) => {return Math.floor(Math.random() * max);}
const randomTone = (array,num) => {return array[num];};
window.onload = function(){document.getElementById("tone").innerText = randomTone(sndArray,randomInt(12));};
function changeTone(){
    document.getElementById("tone").innerText = randomTone(sndArray,randomInt(12));
}