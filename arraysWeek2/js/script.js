"use strict";


//1:: create an empty array
let emptyArray = [];

//2: create an array to hold xpositions
let multipleXPositions = [20, 200, 600, 450, 330, 679]; //create an array

//3: create an array that initially has nothing

let mousePositions = [];

//for 5:
let ellipses = [];

//for 7:: slice -> does NOT change contents of original
//The method slice() method returns the selected elements in an array, >as a new array object.
//The method expects two parameters:
//1: The start index,
//2: the end index (will not include the end index in the new array):

let tempArray = ["A", "B", "C", "D", "E", "F"];
let subArray = [];

//for 8:: The splice() method DOES change the contents of an array
//by removing existing elements and/or replacing or adding new element(s).
//The method expects three  parameters:
//1: The index at which to start adding and/or removing,
//2: the number of items to be removed. (if 0, no items will be removed),
//3: the new item(s) to be added to the array (don't add a parameter if removing).
//**The items removed from the array will be returned

let tempSPLICEArray = ["A", "B", "C", "D", "E", "F", "G"];
let removedSPLICED = [];

function setup() {
  createCanvas(800, 600);
  background(0);
  console.log("running in the setup"); // HOW MANY TIMES DO I RUN?
  textSize(28);
  console.log(emptyArray);
}

// THIS IS LOOPING :)
function draw() {
  background(0);
  fill(255);

  //2: output
  //text(`items in array : ${multipleXPositions}`,100,height/2)

  //2: length
  // text(`length of array: ${multipleXPositions.length}`,100,height/2+100)

  //2: use for loop to access::
  // for(let i=0; i< multipleXPositions.length;i++){
  //     text(`${multipleXPositions[i]}`,100+i*100,height/2+200)
  // }

  //3:: use a for loop to access the mousePositions array and draw a circle at each position
  // for(let i=0; i< mousePositions.length;i++){
  //     ellipse(mousePositions[i],200, 10,10)
  // }

  // //4:
  // for(let i=0; i< mousePositions.length;i++){
  //     ellipse(mousePositions[i].x,mousePositions[i].y, 10,10)
  // }

  //5+6:
  //  for(let i=0; i< ellipses.length;i++){
  //     fill(ellipses[i].color.r,ellipses[i].color.g,ellipses[i].color.b)
  //     ellipse(ellipses[i].x,ellipses[i].y, 10,10)
  // }

  //  //for 6:
  //  text(`length of ellipses array: ${ellipses.length}`,100,height/2+100)

  //for 7
  //fill(255);
  //   text(`ORIG ARRAY::`,100,height/2-200)
  //   for(let i=0; i< tempArray.length;i++){
  //         text(`${tempArray[i]}`,100+i*100,height/2-100)
  //     }
  //     fill(180,180,180);
  //     text(`SLICED ARRAY::`,100,height/2)
  //     for(let i=0; i< subArray.length;i++){
  //           text(`${subArray[i]}`,100+i*100,height/2+100)
  //       }

//   //for 8
//   fill(180, 180, 180);
//   text(`TEMP SPLICED ARRAY::`, 100, height / 2);
//   fill(180, 0, 180);
//   for (let i = 0; i < tempSPLICEArray.length; i++) {
//     text(`${tempSPLICEArray[i]}`, 100 + i * 25, height / 2 + 50);
//   }

//   fill(255, 255, 255);
//   text(`REMOVED ARRAY::`, 100, height / 2 + 100);
//   fill(255, 0, 180);
//   for (let i = 0; i < removedSPLICED.length; i++) {
//     text(`${removedSPLICED[i]}`, 100 + i * 25, height / 2 + 150);
//   }
}

//3
function mousePressed() {
  // add to the array everytime you click FIRST ONLY x
  //3A: output
  //console.log(mousePositions);

  //3B: add
  //mousePositions.push(mouseX);

  //4:: add an obj
  // let newObj = {x:mouseX, y:mouseY};
  // //add again:
  // mousePositions.push(newObj);

  //5:: make that obj more complex by assigning also a random color

//   console.log(ellipses);

//   let newObj = {
//     x: mouseX,
//     y: mouseY,
//     color: { r: random(255), g: random(255), b: random(255) },
//   };
//   //add again: (at back)
//   ellipses.push(newObj);

  //add at front
  //ellipses.unshift(newObj)
}

//for 6:: to remove from an array  - POP

//for 7 :: slice
//on key press
function keyPressed() {
  //console.log(key);
  //https://theasciicode.com.ar/
 // console.log(keyCode); //for SPACE  == 32
  // if(keyCode ===32){
  //     ellipses.pop(); //take last out

  // }

  // if(keyCode ===32){
  //     ellipses.shift(); //take first out

  // }

  //for 7 :: slice
  if (key == "w") {
    //subArray = tempArray.slice(0, 4);
  }

  //for 8 :: splice
  if (key == "q") {
    //add A new item (H) at index 2 - remove nothing
    //tempSPLICEArray.splice(2,0,"H");
    //removedSPLICED = tempSPLICEArray.splice(0,2); // remove first two items in list (index 0 and number is 2)
    // removedSPLICED = tempSPLICEArray.splice(1,1); // remove second item in list (index 1 and 1)
    // removedSPLICED = tempSPLICEArray.splice(1,3); // remove three items from second  item in list (index 1 and 3)

    /** REMOVE AND REPLACE 2 ITEMS **/
   // removedSPLICED = tempSPLICEArray.splice(0, 2, "H", "I"); // remove(2) and replace from index 0
  }
}
