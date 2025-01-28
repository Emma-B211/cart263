/* 7
AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
//PLAYING WITH FOR LOOP AND TEXT


//7: use a nested for loop to draw a grid of evenly spaced circles in for loop...
//7 A: make it work for a circle size that is a multiple of 5 (up to 100) - just by changing one variable.
//7 B: make all circles the same random color  - only switches on page reload
//7 C: have this random color change when the user presses SPACE 
//7 D: on mouse click change the circles to squares if they were circles and to circles if they were squares
//7 E: on load make every even row circles and every odd row squares. Switch on mous press
*/

let randomColor = {};
let isCircle = true;
let isEven = true;

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); // HOW MANY TIMES DO I RUN?
  textSize(28);
  randomColor = {
    r: random(255),
    g: random(255),
    b: random(255),
  };

  //A: start in setup:
}

function draw() {
  background(0);
  let spacer = 50;
  fill(randomColor.r, randomColor.g, randomColor.b);
  // for (let x = spacer / 2; x < width; x += spacer) {
  //   //rows
  //   for (let y = spacer / 2; y < height; y += spacer) {
  //     if (isCircle) {
  //       ellipse(x, y, spacer, spacer);
  //     } else {
  //       rectMode(CENTER);
  //       rect(x, y, spacer, spacer);
  //     }
  //   }
  // }

  //BONUS

    for (let x = spacer / 2; x < width; x += spacer) {
      //rows
      for (let y = spacer / 2; y < height; y += spacer) {
        //EVEN
        if (isEven) {
          // did mouse change
          if (isCircle) {
            ellipse(x, y, spacer, spacer);
          } else {
            rectMode(CENTER);
            rect(x, y, spacer, spacer);
          }
          //ODD
        } else {
          //check if mouse changed...
          if (isCircle) {
            rectMode(CENTER);
            rect(x, y, spacer, spacer);
          } else {
            ellipse(x, y, spacer, spacer);
          }
        }
        isEven = !isEven;
      }
    }
}

//7 B
function keyPressed() {
  if (keyCode === 32) {
    randomColor.r = random(255);
    randomColor.g = random(255);
    randomColor.b = random(255);
  }
}
//7 C

function mouseClicked() {
  if (isCircle === true) {
    isCircle = false;
  } else {
    isCircle = true;
  }
}
