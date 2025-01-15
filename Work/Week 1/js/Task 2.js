"use strict";

function setup() {
    console.log("go")
    createCanvas(900, 400);
    background("black");
    drawEllipse(40, 50, 35, 35, 235, 52, 116);
    drawEllipse(100, 110, 55, 55, 168, 50, 92);
    drawEllipse(160, 180, 65, 65, 125, 16, 60);
}

function draw() {

}

function drawEllipse(x, y, w, h, r, g, b) {

    push();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}