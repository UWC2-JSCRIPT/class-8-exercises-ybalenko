const body = document.querySelector("body");
const rgb = window.getComputedStyle(body).getPropertyValue("background-color");

let rgbSubStr = rgb.substring(4, rgb.length - 1);
let rgbList = rgbSubStr.replace(" ", "").split(",");
let r = parseInt(rgbList[0]);
let g = parseInt(rgbList[1]);
let b = parseInt(rgbList[2]);


const animate = function () {
    if (r <= 255 && g <= 255 && b <= 255) {
        let rgbNewColor = `rgb(${r++}, ${g++}, ${b++})`;
        body.style.backgroundColor = rgbNewColor;
        requestAnimationFrame(animate);
        console.log(rgbNewColor);
    } else {
        cancelAnimationFrame(animate);
    }
}
requestAnimationFrame(animate);



