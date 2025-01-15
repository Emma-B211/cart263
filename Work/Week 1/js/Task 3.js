"use strict";


const square = {

    one: {
        x: 60,
        y: 60,
        size: 65,
        fill: {
            r: undefined,
            g: undefined,
            b: undefined,
        },
    },

    two: {
        x: 80,
        y: 80,
        size: 65,
        fill: {
            r: undefined,
            g: undefined,
            b: undefined,
        },
    },

    three: {
        x: 90,
        y: 90,
        size: 65,
        fill: {
            r: undefined,
            g: undefined,
            b: undefined,
        },
    }
}



function setup() {
    console.log("go")
    createCanvas(900, 400);

}

function draw() {
    background("black");

    drawSquares();

}

function drawSquares() {

    push();
    fill(28, 223, 230);
    rect(square.one.x, square.one.y, square.one.size);
    pop();

    push();
    fill(169, 230, 28);
    rect(square.two.x, square.two.y, square.two.size);
    pop();

    push();
    fill(28, 223, 230);
    rect(square.three.x, square.three.y, square.three.size);
    pop();
}


function mousePressed() {
    if (square.two.size === 65) {
        square.two.x += 10;
    }
}

function keyPressed() {
    if (keyIsDown('32')) {
        square.three.x += 5;
        square.three.y += 15;
    }
}