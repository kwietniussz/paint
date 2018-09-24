let active = false
const cnvs = document.querySelector("canvas");
const ctx = cnvs.getContext("2d");
cnvs.height = 1000
cnvs.width = 1000

// variable to option
let brushSize = 10;
const sizeValue = 5;
const black = "#000";
const red = "#f00";
const green = "#0f0";
const blue = "#00f";
const yellow = "yellow";

//buttons 

let biggerBrushBtn = document.querySelector(".bigger");
let smallerBrushBtn = document.querySelector(".smaller");
let blackbtn = document.querySelector(".black");
let redbtn = document.querySelector(".red");
let greenbtn = document.querySelector(".green");
let bluebtn = document.querySelector(".blue");
let yellowbtn = document.querySelector(".yellow");


//function of buttons 
biggerBrushBtn.addEventListener('click', function () {
    brushSize += sizeValue;
})
smallerBrushBtn.addEventListener('click', function () {
    brushSize -= sizeValue;
})
blackbtn.addEventListener('click', function () {
    ctx.fillStyle = black;
})
redbtn.addEventListener('click', function () {
    ctx.fillStyle = red;
})
greenbtn.addEventListener('click', function () {
    ctx.fillStyle = green;
})
bluebtn.addEventListener('click', function () {
    ctx.fillStyle = blue;
})
yellowbtn.addEventListener('click', function () {
    ctx.fillStyle = yellow;
})

//painting function 
function painting(e) {
    if (active == false) return;
    let mouseX = (e.clientX + window.scrollX);
    let mouseY = (e.clientY + window.scrollY);

    console.log(mouseX, mouseY)

    ctx.fillRect(mouseX, mouseY, brushSize, brushSize);
}

function paintingActive() {
    active = true;
}

function paintingCancel() {
    active = false
}
cnvs.addEventListener('mousemove', painting)
cnvs.addEventListener('mousedown', paintingActive)
cnvs.addEventListener('mouseup', paintingCancel)