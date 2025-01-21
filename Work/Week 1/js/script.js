"use strict";

function setup() {
    console.log("go")
    createCanvas(900, 400);
}

function draw() {
    background("black");

    //ellipse 1
    push();
    fill(235, 52, 116);
    ellipse(40, 50, 35, 35);
    pop();

    //ellipse 2
    push();
    fill(235 - 50, 52 - 50, 116 - 50);
    ellipse(40 + 40, 50 + 40, 35 + 20, 35 + 20);
    pop();

    //ellipse 1
    push();
    fill(235 - 100, 52 - 100, 116 - 100);
    ellipse(40 + 90, 50 + 90, 35 + 35, 35 + 35);
    pop();

}