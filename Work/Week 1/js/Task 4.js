"use strict";
const rectangle = {
    one: {
        x: 0,
        y: 600,
        width: 200,
        height: 200,
        size: 200,
    },
    two: {
        x: 200,
        y: 600,
        height: 200,
        width: 200,
        size: 200,

    },

    three: {
        x: 400,
        y: 600,
        height: 200,
        width: 200,
        size: 200,
    },
}





function setup() {
    console.log("go")
    createCanvas(600, 600);
}

function draw() {
    background("black");

    drawRectangle();
}

function drawRectangle() {

    push();
    fill(0, 255, 0);
    rect(rectangle.one.x, rectangle.one.y, rectangle.one.width, rectangle.one.height);
    pop();

    push();
    fill(255, 90, 54);
    rect(rectangle.two.x, rectangle.two.y, rectangle.two.height, rectangle.two.width);
    pop();

    push();
    fill(32, 56, 219);
    rect(rectangle.three.x, rectangle.three.y, rectangle.three.height, rectangle.three.width);
    pop();
}
