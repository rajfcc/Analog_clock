//h hours= 30h + m/2 hour hand
//m min = 6m + s/10 min hand
//s sec = 6s + 6/1000*ms sec hand

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm + ss/10;
    let sRotation = 6*ss + (6/1000)*ms;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1)