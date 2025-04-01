"use strict";
/** 
//draws a rectangle hallway
const longHallway = {
    floor: {
        x: 150,
        y: 0,
        width: 150,
        height: 650,
        image: undefined,
        block: {
            min: 150 + 25,
            max: 300 - 25,
        },
    },
    leftWall: {
        x: 125,        //(100 - 25),//longHallway.floor.x - 25,
        y: 0,
        width: 25,
        height: 650,
        image: undefined,
    },
    rightWall: {
        x: 300,           //(100 + 150), //longHallway.floor.x + 150,
        y: 0,
        width: 25,
        height: 650,
        image: undefined,
    },
}
*/

/** 
const firstHallway = {
    x: 400,
    y: 0,
    width: 200,
    height: 650,
    image: undefined,
    wall: {
        left: 400 + 50,   // added the character width  from the x
        right: 600 - 50,  // take out the character width from the x
    },
    top: {
        y: 0,
    },

    bottom: {
        y: 650,
    },
}
*/


/**
 * Draws the character and has the different images to make it walk
 */
const character = {
    //the standard start of the charcter
    x: 500,
    y: 100,
    width: 45,
    height: 55,
    imageFront: undefined,
    imageBack: undefined,
    walk: {
        x: 2,
        y: 2,
    },
    //the images for the character walking facing the player . (going down)
    front: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },
    //the images for the character walking facing away from the player (going up)
    back: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },
    rightSide: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },
    leftSide: {
        imageRightLeg: undefined,
        imageMiddle: undefined,
        imageLeftLeg: undefined,
    },
}

//this is where all information on each hallway/rooms are held.
let hallways = {

    startHallway: {
        image: undefined,
        verticalWall: {
            left: 400 + 50,
            right: 600 - 50,
        },
        top: {
            y: 0,
        },

        bottom: {
            y: 650,
        }

    },


    secondHallway: {
        image: undefined,
        verticalWall: {
            left: 350 + 50,
            right: 500 - 50,
            top: undefined,
            bottom: undefined,
        },

        secondVerticalWall: {
            left: 950,
            right: 1000,
            top: undefined,

        },
        horizontalWall: {
            top: 600,
            bottom: 650,
        },

        top: {
            y: 0,
        },

        bottom: {
            y: 650,
        },
    },

    //     // Simulating flickering lights in a spooky hallway
    //     if(frameCount % 30 < 15) {
    //         fill(255);
    // rect(0, 0, width, height);
}

//creates the state in which to tell in what rrom the charcter is in so when it changes it will know
let currentRoom = "startHallway";

//will hold all of the drawing of the hallways. so its easy to add any in the process.
let rooms = {};

//to help move the charcter between images 
let legPosition = 0;

//to help with the keydown. when the charcter is moving or not
let isMoving = false;

//the paper texture of the canvas
let gameBackdrop = {
    image: undefined,
}


function preload() {

    gameBackdrop.image = loadImage("assets/images/Paper_Backdrop.png");

    hallways.startHallway.image = loadImage("assets/images/Hallway.png");
    hallways.secondHallway.image = loadImage("assets/images/Second_Hallway_Full.png");

    //charcter images
    character.imageFront = loadImage("assets/images/Character_Front.png");
    character.imageBack = loadImage("assets/images/Character_Back.png");

    character.front.imageRightLeg = loadImage("assets/images/Character_Front_Right.png");
    character.front.imageMiddle = loadImage("assets/images/Character_Front_Middle.png");
    character.front.imageLeftLeg = loadImage("assets/images/Character_Front_Left.png");

    character.back.imageRightLeg = loadImage("assets/images/Character_Back_Right.png");
    character.back.imageMiddle = loadImage("assets/images/Character_Back_Middle.png");
    character.back.imageLeftLeg = loadImage("assets/images/Character_Back_Left.png");

    character.rightSide.imageRightLeg = loadImage("assets/images/Character_Right_Side_Right_Leg.png");
    character.rightSide.imageMiddle = loadImage("assets/images/Character_Right_Side_Middle.png");
    character.rightSide.imageLeftLeg = loadImage("assets/images/Character_Right_Side_Left_Leg.png");

    character.leftSide.imageRightLeg = loadImage("assets/images/Character_Left_Side_Right_Leg.png");
    character.leftSide.imageMiddle = loadImage("assets/images/Character_Left_Side_Middle.png");
    character.leftSide.imageLeftLeg = loadImage("assets/images/Character_Left_Side_Left_Leg.png");


    // longHallway.floor.image = loadImage("assets/images/Long_Hallway_Floor.png");
    // longHallway.leftWall.image = loadImage("assets/images/Long_Hallway_Left_Wall.png");
    // longHallway.rightWall.image = loadImage("assets/images/Long_Hallway_Right_Wall.png");

    // firstHallway.image = loadImage("assets/images/Hallway.png");
    // secondHallway.image = loadImage("assets/images/Second_Hallway.png");

}

function setup() {
    console.log("go")

    createCanvas(1000, 650);

    hallways.startHallway.image.resize(200, 650);
    hallways.secondHallway.image.resize(650, 650);

    //resize the images to fit better the game
    character.imageFront.resize(70, 75);
    character.imageBack.resize(70, 75);

    character.front.imageRightLeg.resize(70, 75);
    character.front.imageMiddle.resize(70, 75);
    character.front.imageLeftLeg.resize(70, 75);

    character.back.imageRightLeg.resize(70, 75);
    character.back.imageMiddle.resize(70, 75);
    character.back.imageLeftLeg.resize(70, 75);

    character.rightSide.imageRightLeg.resize(55, 70);
    character.rightSide.imageMiddle.resize(55, 70);
    character.rightSide.imageLeftLeg.resize(55, 70);

    character.leftSide.imageRightLeg.resize(55, 70);
    character.leftSide.imageMiddle.resize(55, 70);
    character.leftSide.imageLeftLeg.resize(55, 70);

    // //resize long Hallway
    // longHallway.floor.image.resize(150, 650);
    // longHallway.leftWall.image.resize(25, 650);
    // longHallway.rightWall.image.resize(25, 650);

    // firstHallway.image.resize(200, 650);
    // //secondHallway.image.resize(500, 650);

    //this is where we draw the hallways/rooms 
    rooms = {

        startHallway: {
            draw: function () {
                push();
                imageMode(CORNER);
                image(hallways.startHallway.image, 400, 0);
                //image(table.....) //can add furniture and it will only appear in this room.
                pop();
                //can do the same for effect we can add them here or specifically mention the currentRoom state
            },
        },

        secondHallway: {
            draw: function () {
                push();
                imageMode(CORNER);
                image(hallways.secondHallway.image, 350, 0);
                pop();
            },
        },
    };

}

function draw() {
    console.log(mouseX);
    console.log(mouseY);
    // this is the paper texture in the background
    background(gameBackdrop.image);

    //this is what draws the room. it will check which room the character 
    // is in and see if it passes the exit point it will draw the new room. therefore easily changing it. 
    //this is check in the room transition with if statements. 
    if (rooms[currentRoom]) {
        rooms[currentRoom].draw();
    };

    moveCharacter();
    blockWallCharacter();

    drawCharacter();


    checkRoomTransition();

    // drawLongHallway();
    // drawFirstHallway();
}

function checkRoomTransition() {

    //go into a new room from the top 
    if (currentRoom === "startHallway" && character.y <= hallways.startHallway.top.y) {
        currentRoom = "secondHallway";
        character.y = 649;
        character.imageFront = character.front.imageMiddle;
    }

    // if (currentRoom === "secondHallway" && character.y <= hallways.secondHallway.top.y) {
    //     currentRoom = "thirdHallway";
    //     character.y = 649;
    // character.imageFront = character.front.imageMiddle;
    // }

    //come back to a room from the bottom
    if (currentRoom === "secondHallway" && character.y >= hallways.secondHallway.bottom.y) {
        currentRoom = "startHallway";
        character.y = 1;
        character.imageFront = character.front.imageMiddle;
    }
}


function blockWallCharacter() {

    let currentHallway = hallways[currentRoom];

    // character.x = constrain(character.x, longHallway.floor.block.min, longHallway.floor.block.max);

    character.x = constrain(character.x, currentHallway.verticalWall.left, currentHallway.verticalWall.right);
    // character.x = constrain(character.x, currentHallway.secondVerticalWall.left, currentHallway.secondVerticalWall.right);
    // character.y = constrain(character.y, currentHallway.horizontalWall.left, currentHallway.HorizontalWall.right);

}

//makes the character walk
function moveCharacter() {
    isMoving = false;

    if (keyIsDown(UP_ARROW)) {
        isMoving = true;

        //the character moves up
        character.y = character.y - character.walk.y;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.back.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.back.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.back.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        isMoving = true;

        //character moves down
        character.y = character.y + character.walk.y;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.front.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.front.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.front.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        isMoving = true;

        //the character moves left
        character.x = character.x + character.walk.x;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.rightSide.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.rightSide.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.rightSide.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    if (keyIsDown(LEFT_ARROW)) {
        isMoving = true;

        //the character moves right
        character.x = character.x - character.walk.x;

        if (frameCount % 10 === 0) {
            if (legPosition === 0) {
                character.imageFront = character.leftSide.imageRightLeg;
                legPosition = 1;
            }
            else if (legPosition === 1) {
                character.imageFront = character.leftSide.imageMiddle;
                legPosition = 2;
            }
            else if (legPosition === 2) {
                character.imageFront = character.leftSide.imageLeftLeg;
                legPosition = 0;
            }
        }
    }

    else {
        isMoving = false;
        character.imageFront = character.imageFront;
        //it isnt working!!!!!!!
    }

}

function drawCharacter() {
    push();
    // rectMode(CENTER);
    imageMode(CENTER);
    noFill();
    //  rect(character.x, character.y, character.width, character.height);
    image(character.imageFront, character.x, character.y);
    pop();
}


// function drawFirstHallway() {

//     push();
//     // rect(hallway.x, hallway.y, hallway.width, hallway.height);
//     image(firstHallway.image, firstHallway.x, firstHallway.y);
//     pop();
// }


// function drawLongHallway() {
//     //draw Floor
//     push();
//     rect(longHallway.floor.x, longHallway.floor.y, longHallway.floor.width, longHallway.floor.height);
//     image(longHallway.floor.image, longHallway.floor.x, longHallway.floor.y);
//     pop();

//     //draws left wall 
//     push();
//     rect(longHallway.leftWall.x, longHallway.leftWall.y, longHallway.leftWall.width, longHallway.leftWall.height);
//     image(longHallway.leftWall.image, longHallway.leftWall.x, longHallway.leftWall.y);
//     pop();

//     //draws right wall 
//     push();
//     rect(longHallway.rightWall.x, longHallway.rightWall.y, longHallway.rightWall.width, longHallway.rightWall.height);
//     image(longHallway.rightWall.image, longHallway.rightWall.x, longHallway.rightWall.y);
//     pop();
// }

//draws the character

