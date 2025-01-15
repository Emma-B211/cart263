"use strict";
const square = {
    x: 40,
    y: 40,
    w: 40,
    h: 40,
    fill: "orange"

}
function setup() {
    console.log("go")
    createCanvas(900, 400);
}

function draw() {
    background("black");




}

function displaySquare() {
    push();
    fill(square.fill);
    rect(square.one.x, square.one.y, square.one.size);
    pop();
}