const sndArray = ['Ａ','Ｂ','Ｃ','Ｄ','Ｅ','Ｆ','Ｇ','Ａ♯/Ｂ♭','Ｃ♯/Ｄ♭','Ｄ♯/Ｅ♭','Ｆ♯/Ｇ♭','Ｇ♯/Ａ♭']; 
const randomInt = (max) => {return Math.floor(Math.random() * max);}
const randomTone = (array,num) => {return array[num];};
window.onload = function(){document.getElementById("tone").innerText = randomTone(sndArray,randomInt(12));};
function changeTone(){
    document.getElementById("tone").innerText = randomTone(sndArray,randomInt(12));
}