"use strict";
const square = {
    x: 40,
    y: 40,
    w: 40,
    h: 40,
    //alpha: 100,
    fill: "#FFA500"

}
let radius = 30;
let counter = 0;
let circleX = 300;
let circleY = 300;
let circleFill = "white"
const circle = {
    x: 300,
    y: 300,
    size: 40,
    radius: 30,
    fill: (0, 0, 0, 100)
}
let ellipseAlpha = 100;

function setup() {
    console.log("go")
    createCanvas(600, 600);

}

function draw() {
    background("black");
    displaySquare();
    //mousePressed();
    checkCollisionWithSquare();
    //mousePressed();
    // bigCircle();
    drawCircle(circleX, circleY, 100, ellipseAlpha);

}

function displaySquare() {
    push();
    fill(square.fill);
    rect(square.x, square.y, square.w, square.h);
    pop();

    while (mousePressed) {
        drawCircle(circleX, circleY, 100, ellipseAlpha);
        circleX = circleX + 10;
        ellipseAlpha = ellipseAlpha - 10;
    }
}

// function mouseHover() {

// }
function drawCircle(circleX, circleY, radius, ellipseAlpha) {
    push();
    fill(255, 255, 255, alpha);
    ellipse(circleX, circleY, radius, ellipseAlpha);
    pop();
}

function checkCollisionWithSquare() {
    const mouseOverlap = (mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h);
    if (mouseOverlap) {
        square.fill = "#FFBF80";
    } else {
        square.fill = "#FFA500";
    };

}
function mousePressed() {
    //console.log(counter);
    const mouseOverlap = (mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h);
    // console.log(counter);
    // const mouseIsPressed = mousePressed();
    if (mousePressed && mouseOverlap) {
        counter = counter + 1;
    };
    // if (mouseOverlap) {
    //     square.fill = "#FFBF80";
    // } else {
    //     square.fill = "#FFA500";
    // };


}

// function bigCircle() {
//     push();
//     fill(circle.fill);
//     ellipse(circle.x, circle.y, circle.size);
//     pop();
// }

