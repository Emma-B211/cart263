/* 2 INC VARS::
// DO NOT USE OBJECTS or ARRAYS
//DO USE IF STATEMENTS..
 ok... so create three rectangles (or squares)
//color and size do not matter (but USE VARS/CONSTS whenever possible)
//A:
update the position of 1st rectangle 1 whenever the mouse is clicked on the canvas
//B:
update the position of the 2nd rectangle in the draw: when spacebar is pressed
//C:
update the position of the 3rd rectangle in the draw() _ each frame... only chnage the y position in 1 direction.
// handle the bottom bounds: if the rectangle is at the bottom, set it to the top

//BONUS... everytime the mouse moves on the canvas change the color of the 3rd rectangle with a new random color
*/

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); 

  //A: start in setup:
}

let w = 50;
let h = 50;
let x = 10;
let y = 10;

let x1 = 50;
let y1 = 40;

let y2 = 100;

let r = 255;
let g = 255;
let b = 255;

function draw() {
  background(0);

  fill(200, 0, 140);
  rect(x, y, w, h);
  rect(x1, y1, w, h);
  fill(r, g, b);
  rect(x, y2, w, h);

  if (y2 >= height) {
    y2 = 0;
  } else {
    y2 += 5;
  }
}
function mouseClicked() {
  x += 2;
  y += 2;
  console.log("clicked");
}
function keyPressed() {
  console.log(keyCode);
  if (keyCode === 32) {
    // console.log("SPACE")
    x1 += 4;
    y1 += 4;
  }
}

function mouseMoved() {
  r = Math.floor(random(255));
  g = Math.floor(random(255));
  b = Math.floor(random(255));
}
