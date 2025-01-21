"use strict";
let circleSize = 30;
let circleColor;
let rectWidth = 30;
let rectHeight = 30;
let gridSize = 30;
let rectColor;
let padding = 5;
let state = "circle"
function setup() {
    createCanvas(400, 400);
    noStroke();
    circleColor = color(random(255), random(255), random(255));
    rectColor = color(random(255), random(255), random(255));
}

function draw() {
    background(220);
    // for loop
    if (state === "circle") {
        for (let x = 0; x < width; x += circleSize) {
            for (let y = 0; y < height; y += circleSize) {
                fill(circleColor);
                ellipse(x + circleSize / 2, y + circleSize / 2, circleSize);

            }
        }
    }
    else if (state === "square") {
        for (let x = 0; x < width; x += gridSize) {
            for (let y = 0; y < height; y += gridSize) {
                fill(rectColor);
                rect(x, y, gridSize - padding);
                // rect(45, 10, rectWidth, rectHeight);
            }
        }
    }
}

function keyPressed() {
    if (keyIsDown('32')) {
        circleColor = color(random(255), random(255), random(255));
        rectColor = color(random(255), random(255), random(255));
    }
}

function mousePressed() {
    if (state === "circle") {
        state = "square";
    }

    else if (state === "square") {
        state = "circle";
    }
}