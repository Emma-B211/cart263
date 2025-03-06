"use strict";


// let characterBackWalk = [
//     {

//     }
// ]

const characterWalk = {

    x: 100,
    y: 100,
    height: 55,
    width: 40,
    imageFront: undefined,
    imageBack: undefined,

    front: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },

    back: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },

    //     side: {
    // image
    //     }

}

// const characterFrontWalk = {


// }

const longHallway = {

    floor: {
        x: undefined,
        y: undefined,
        width: 150,
        height: 600,
        image: undefined,
    },

    rigthWall: {
        x: undefined,//longHallway.floor.x + 5,
        y: undefined,//longHallway.floor.y,
        width: 30,
        height: 600,
        image: undefined
    },

    leftWall: {
        x: undefined, //longHallway.floor.x - 5,
        y: undefined,//longHallway.floor.y,
        width: 30,
        height: 600,
        image: undefined
    }

}

let legPosition = 0;
let isMoving = false;

let gameBackdrop = {
    image: undefined,
}


function preload() {
    longHallway.floor.image = loadImage("assets/images/trial.png");
    gameBackdrop.image = loadImage("assets/images/Paper_Backdrop.png");

    characterWalk.imageFront = loadImage("assets/images/Character_Front.png");
    characterWalk.imageBack = loadImage("assets/images/Character_Back.png");

    characterWalk.front.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    characterWalk.front.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");
    characterWalk.front.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");

    characterWalk.back.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    characterWalk.back.imageMiddle = loadImage("assets/images/Character_Back_Middle.png");
    characterWalk.back.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

    // characterFrontWalk.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    // characterFrontWalk.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");
    // characterFrontWalk.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");

    // characterBackWalk.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    // characterBackWalk.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

    // characterStill.imageFront = loadImage("assets/images/Character_Front.png");
    // characterStill.imageBack = loadImage("assets/images/Character_Back.png");
}

function setup() {
    console.log("go")
    createCanvas(1000, 650);


    characterWalk.imageFront.resize(75, 80);
    characterWalk.imageBack.resize(75, 80);

    characterWalk.front.imageRightLeg.resize(75, 80);
    characterWalk.front.imageMiddle.resize(75, 80);
    characterWalk.front.imageLeftLeg.resize(75, 80);

    characterWalk.back.imageRightLeg.resize(75, 80);
    characterWalk.back.imageMiddle.resize(75, 80);
    characterWalk.back.imageLeftLeg.resize(75, 80);

    longHallway.floor.image.resize(150, 600);

}

function draw() {
    background(gameBackdrop.image);
    //  for (let characterFrontWalk of characterFrontWalks) {


    // }

    drawLongHallway();
    drawCharacter();
    moveCharacter();
    //  blockWallCharacter();

}


function moveCharacter() {
    //  console.log(keyIsDown)

    // if (!isMoving === false) {
    //     characterWalk.imageFront = characterWalk.imageFront;
    // }
    isMoving = false;

    if (keyIsDown(UP_ARROW)) {
        isMoving = true;

        characterWalk.y -= 2;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                characterWalk.imageFront = characterWalk.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                characterWalk.imageFront = characterWalk.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                characterWalk.imageFront = characterWalk.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        isMoving = true;

        characterWalk.y += 2;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                characterWalk.imageFront = characterWalk.front.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                characterWalk.imageFront = characterWalk.front.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                characterWalk.imageFront = characterWalk.front.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    else {
        isMoving = false;
        characterWalk.imageFront = characterWalk.imageFront;

    }

}


function drawCharacter() {

    push();
    rectMode(CENTER);
    imageMode(CENTER);
    noFill();
    rect(characterWalk.x, characterWalk.y, characterWalk.width, characterWalk.height);
    image(characterWalk.imageFront, characterWalk.x, characterWalk.y);
    pop();

}


function drawLongHallway() {

    //draw Floor
    push();
    //rectMode(CENTER);
    //imageMode(CENTER);
    rect(300, 0, longHallway.floor.width, longHallway.floor.height);
    image(longHallway.floor.image, 300, 0);
    pop();

}