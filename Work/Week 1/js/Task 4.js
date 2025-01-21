"use strict";
const rectangle = {
    one: {
        x: 0,
        y: 0,
        height: 600,
        width: 200,
        fill: "#0033CC",
    },
    two: {
        x: 200,
        y: 0,
        height: 600,
        width: 200,
        fill: "#007899",


    },

    three: {
        x: 400,
        y: 0,
        height: 600,
        width: 200,
        fill: "#66D9FF",
    },
}
let mouseDist;

function setup() {
    console.log("go")
    createCanvas(600, 600);
}

function draw() {
    background("black");

    drawRectangle();
    checkInput();
    // mouseOverlappingrect();
}

function drawRectangle() {

    push();
    fill(rectangle.one.fill);
    rect(rectangle.one.x, rectangle.one.y, rectangle.one.width, rectangle.one.height);
    pop();

    push();
    fill(rectangle.two.fill);
    rect(rectangle.two.x, rectangle.two.y, rectangle.two.width, rectangle.two.height);
    pop();

    push();
    fill(rectangle.three.fill);
    rect(rectangle.three.x, rectangle.three.y, rectangle.three.width, rectangle.three.height);
    pop();
}

function checkInput() {
    // Check if the mouse is within the bounds of rectangle one
    if (mouseX > rectangle.one.x && mouseX < rectangle.one.x + rectangle.one.width && mouseY > rectangle.one.y && mouseY < rectangle.one.y + rectangle.one.height) {
        rectangle.one.fill = "white"; // Change fill color to white when mouse overlaps
    } else {
        rectangle.one.fill = "#0033CC"; // Reset fill color to default blue
    };
    if (mouseX > rectangle.two.x && mouseX < rectangle.two.x + rectangle.two.width && mouseY > rectangle.two.y && mouseY < rectangle.two.y + rectangle.two.height) {
        rectangle.two.fill = "white"; // Change fill color to white when mouse overlaps
    } else {
        rectangle.two.fill = "#007899"; // Reset fill color to default light blue
    };
    if (mouseX > rectangle.three.x && mouseX < rectangle.three.x + rectangle.three.width && mouseY > rectangle.three.y && mouseY < rectangle.three.y + rectangle.three.height) {
        rectangle.three.fill = "white"; // Change fill color to white when mouse overlaps
    } else {
        rectangle.three.fill = "#66D9FF"; // Reset fill color to default green
    }

}
//  // mouseDist = dist(mouseX, mouseY, rectangle.one.x, rectangle.one.y);

// if (mouseX > rectangle.one.y && mouseX < (rectangle.one.x + rectangle.one.width) && mouseY > rectangle.one.y && mouseY < (rectangle.one.y + rectangle.one.height)) {
//     fill = "white";
// } else {
//     fill(0, 255, 0);
// }
// function mouseOverlappingrect() {

//     if ((mouseX > rectangle.one.x) && (mouseX < rectangle.one.x + rectangle.one.width) && (mouseY > rectangle.one.y) && (mouseY < rectangle.one.y + rectangle.one.height)) {
//         rectangle.one.fill = (255);
//     } else {
//         rectangle.one.fill = (0, 255, 0);
//     }
// }


