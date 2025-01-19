"use strict";
const square = {
    x: 40,
    y: 40,
    w: 40,
    h: 40,
    //alpha: 100,
    fill: "#FFA500"

}
// let radius = 30;
let counter = 0;
// let circleX = 300;
// let circleY = 300;
// let circleFill = "white"
// const circle = {
//     x: 300,
//     y: 300,
//     size: 40,
//     radius: 30,
//     fill: (0, 0, 0, 100)
// }
//let ellipseAlpha = 0;
const ellipseProps = {
    radius: 50,
    fill: "white",
    alpha: 50,

}
function setup() {
    console.log("go")
    createCanvas(400, 400);

}

function draw() {
    background("black");
    displaySquare();
    //mousePressed();
    //  checkCollisionWithSquare();
    //mousePressed();
    // bigCircle();
    // drawCircle(circleX, circleY, 100, ellipseAlpha);
    if (checkCollisionWithSquare()) {
        square.fill = "#FFBF80";
    } else {
        square.fill = "#FFA500";
    }
    let x = 20;
    let i = 0;
    let alpha = ellipseProps.alpha
    while (i < counter && counter <= 10 && counter >= 1) {
        let currentRadius = ellipseProps.radius + (i * 30);


        // draw ellipse
        fill(255, 255, 255, alpha);
        ellipse(200, 200, currentRadius, currentRadius);
        alpha = alpha + 1
        currentRadius = currentRadius + 50
        // ellipseProps.radius = ellipseProps.radius + 0.5
        x += 200;
        i++;
    }
}

function displaySquare() {
    push();
    fill(square.fill);
    rect(square.x, square.y, square.w, square.h);
    pop();

    // while (counter < 10 && counter > 1) {
    //     drawCircle(circleX, circleY, 100, ellipseAlpha);
    //     circleX = circleX + 10;
    //     ellipseAlpha = ellipseAlpha - 10;

    // }

}

// function mouseHover() {

// }
// function drawCircle(circleX, circleY, radius, ellipseAlpha) {
//     push();
//     fill(255, 255, 255, alpha);
//     ellipse(circleX, circleY, radius, ellipseAlpha);
//     pop();
// }

function checkCollisionWithSquare() {
    return mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h;


}
function mousePressed() {
    //console.log(counter);
    if (checkCollisionWithSquare()) {
        if (counter < 10) {
            counter++;
        }
    }

}
// const mouseOverlap = (mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h);
// // console.log(counter);
// // const mouseIsPressed = mousePressed();
// if (mousePressed && mouseOverlap) {
//     counter = counter + 1;
// };
// if (mouseOverlap) {
//     square.fill = "#FFBF80";
// } else {
//     square.fill = "#FFA500";
// };




// function bigCircle() {
//     push();
//     fill(circle.fill);
//     ellipse(circle.x, circle.y, circle.size);
//     pop();
// }

