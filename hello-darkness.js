const body = document.querySelector("body");
const bgColor = window.getComputedStyle(body).getPropertyValue("background-color");


let rgb = bgColor;
let rgbSubStr = rgb.substring(4, rgb.length - 1);
let rgbList = rgbSubStr.replace(" ", "").split(",");
let r = parseInt(rgbList[0]);
let g = parseInt(rgbList[1]);
let b = parseInt(rgbList[2]);

let countdownIntervalID = setInterval(function () {
    if (r > 0 && g > 0 && b > 0) {
        let rgbNewColor = `rgb(${r--}, ${g--}, ${b--})`;
        body.style.backgroundColor = rgbNewColor;
    } else {
        clearInterval(countdownIntervalID);
        body.style.backgroundColor = bgColor;
    }
}, 500);



