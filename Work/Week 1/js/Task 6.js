"use strict";
let x = 0;
function setup() {
    console.log("go")
    createCanvas(750, 750);
    background("black");
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER)

    text("test", width / 2, height / 2);

    for (let i = 0; i < 10; i++) {
        let x = i * 40;
        text(i, x + 40, 40);

    }

    // second for loop

    for (let i = 1; i <= 15; i++) {
        let yPos = i * 40;
        text(i, 40, yPos + 40);
    }
}

function draw() {





}