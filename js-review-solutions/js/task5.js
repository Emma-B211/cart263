/* 4 WHILE LOOP
/*AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
// FOR THIS EXERCISE DO NOT USE A FOR LOOP - ONLY WHILE LOOP(S)
// 1: create a variable that will hold a number i.e. `counter`, set its value to 0
// 2: create an orange square (width, size and position do not matter) 
// - use an object to hold its properties (w,h,x and y and color)
//create a function called displaySquare() and in the body of the function implement the code to render the orangeSquare
// call this function in the draw()
//3: whenever the mouse is CLICKED inside the orange square 
// increment the counter variable by 1 
//4: whenever the mouse is OVER the orange square highlight the square to be lighter orange
//-> create a helper function to check if the mouse is inside the square (i.e. checkCollisionWithSquare), return true if it is and false otherwise
// USE this function in (3) and (4) 

//5: create an ellipse and draw it with its center at the center of the screen
//5A: make a variable called `radius` to hold the size of the ellipse
//5B: set the color of the ellipse to be white, 
// and create a variable called `ellipseAlpha` to hold the alpha value of the ellipse.
--> practise showing the ellipse at different sizes - change the radius (always with the same x and y) 

//6: USE A SINGLE WHILE LOOP in the draw() to :
A: draw the same number of ellipse as that of the counter (if the counter is 1 - 1 ellipse, if the counter is 2: 2 ellipse etc...)
B: with each new circle make it slightly larger and make the alpha value larger (start the alpha small)
C: do not draw anything if the counter is greater than 10 or less than 1
BONUS A: make the logic for drawing a singler circle into a custom function (i.e. drawCircle(x,y,radius,alpha)) 

7:: BONUS II  - make another square (red) that when clicked will decrement the counter by 1
// AND  - when hovered over will be lighter red ... (make custom functions and objects as required)
*/

let counter = 0;
let orangeSquare = {
  x: 10,
  y: 50,
  w: 40,
  h: 40,
  color: {
    r: 243,
    g: 106,
    b: 12,
  },
};

let redSquare = {
  x: 60,
  y: 50,
  w: 40,
  h: 40,
  color: {
    r: 243,
    g: 0,
    b: 12,
  },
};
function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); 
}

function draw() {
  background(0);
  displaySquare();
  displayRedSquare();


  // if counter is between 1-10
  if (counter <= 10 && counter > 0 ) {
    let currentNumOfCircles = 0;
    strokeWeight(4);
    let radius = 50;
    let ellipseAlpha = 20;

    // stop the while loop when we reached counter
    while (currentNumOfCircles < counter) {
      displayCircle(width/2, height/2, radius,ellipseAlpha);
      radius += 50;
      ellipseAlpha += 10;
      currentNumOfCircles += 1;
    }
  }
}
function displaySquare() {
  rectMode(CORNER);
  noStroke();
  fill(orangeSquare.color.r, orangeSquare.color.g, orangeSquare.color.b);
  rect(orangeSquare.x, orangeSquare.y, orangeSquare.w, orangeSquare.h);
}

function displayRedSquare(){
  rectMode(CORNER);
  noStroke();
  fill(redSquare.color.r, redSquare.color.g, redSquare.color.b);
  rect(redSquare.x, redSquare.y, redSquare.w, redSquare.h);
}


function displayCircle(x,y,r,a){
  stroke(255, a);
  fill(255,a)
  rectMode(CENTER);
  ellipse(x, y, r);
}

/* MOUSE CLICKED*/

function mouseClicked() {
  //check if mouse is in square
  let val = checkCollisionWithSquare();
  if (val === true && counter <10) {
    //update counter (will draw one more circle in while loop)
    counter += 1;
  }
 //check if mouse is in red square
  let valTwo = checkCollisionWithRedSquare();
  if (valTwo === true && counter >0) {
      //update counter (will draw one less circle in while loop)
    counter -= 1;
  }
}
/* MOUSE MOVED */
function mouseMoved() {
  //check if mouse is over orange square
  let val = checkCollisionWithSquare();
  if (val === true) {
    orangeSquare.color.r = 243;
    orangeSquare.color.g = 180;
    orangeSquare.color.b = 12;
  } else {
    orangeSquare.color.r = 243;
    orangeSquare.color.g = 106;
    orangeSquare.color.b = 12;
  }
    //check if mouse is over red square
  let valRed = checkCollisionWithRedSquare();

  if (valRed === true) {
    redSquare.color.r = 255;
    redSquare.color.g = 100;
    redSquare.color.b = 0;
  } else {
    redSquare.color.r = 243;
    redSquare.color.g = 0;
    redSquare.color.b = 12;
  }

}

//NOTE:: we could have had one collision function for both squares.... */
//COLLISION FUNCTION I (for orange square)
function checkCollisionWithSquare() {
  if (
    mouseX > orangeSquare.x &&
    mouseX < orangeSquare.x + orangeSquare.w &&
    mouseY > orangeSquare.y &&
    mouseY < orangeSquare.y + orangeSquare.h
  ) {
    return true;
  } else {
    return false;
  }
}
//COLLISION FUNCTION II (for red square)
function checkCollisionWithRedSquare() {
  if (
    mouseX > redSquare.x &&
    mouseX < redSquare.x + redSquare.w &&
    mouseY > redSquare.y &&
    mouseY < redSquare.y + redSquare.h
  ) {
    return true;
  } else {
    return false;
  }
}
