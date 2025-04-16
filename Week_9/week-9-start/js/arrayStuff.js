window.onload = function () {
/* BUTTONS */
  document
    .querySelector("#mapButtonA")
    .addEventListener("click", mapArraysShape);
  document
    .querySelector("#mapButtonB")
    .addEventListener("click", mapArraysColor);

 document
    .querySelector("#filterButtonA")
    .addEventListener("click", filterArraysX);

    document
    .querySelector("#filterButtonB")
    .addEventListener("click", filterArraysByShape);


    document
    .querySelector("#forEachButtonA")
    .addEventListener("click", forEachCallBackA);

    document
    .querySelector("#forEachButtonB")
    .addEventListener("click", forEachCallBackB);


    document
    .querySelector("#findButtonA")
    .addEventListener("click", findCallBackA);

    document
    .querySelector("#findButtonB")
    .addEventListener("click", findCallBackB);



  const allRows = document.querySelectorAll(".flex-row");

  //STEP ONE::
  const originalRow = allRows[0];
  let arrayOfShapes = [];

  //INITIAL
  for (let i = 0; i < 10; i++) {
    let color = `rgb(${255 - i * 10},0,0)`;
    console.log(color);
    arrayOfShapes.push(
      new ShapeDef((i + 1) * 55, 50, "shape", "rectangle", color)
    );
  }

  add_New_Els_ToDOM(arrayOfShapes, originalRow);


let arrayOfShapesTwo = [];
const secondRow = allRows[1];

  //INITIAL
  let cshape =''
  for (let i = 0; i < 16; i++) {
    let color = `rgb(${255 - i * 10},0,0)`;
    if(i%2===0)cshape = 'circle'
    else cshape = 'rectangle'
    
    arrayOfShapesTwo.push(
      new ShapeDef((i + 1) * 55, 50, "shape", cshape, color)
    );
  }

add_New_Els_ToDOM(arrayOfShapesTwo, secondRow);



let arrayOfShapesThree = [];
const thirdRow = allRows[2];

  //INITIAL

  for (let i = 0; i < 10; i++) {
    let color = `rgb(${255 - i * 10},${255 - i * 10},0)`;
    
    arrayOfShapesThree.push(
      new ShapeDef((i + 1) * 55, 50, "shape", 'circle', color)
    );
  }

add_New_Els_ToDOM(arrayOfShapesThree, thirdRow);
thirdRow.innerHTML+=`<div id = "pSpan"></div>`

//for the foreach


let arrayOfShapesFour = [];
const fourthRow = allRows[3];

  //INITIAL

  for (let i = 0; i < 12; i++) {
    let color = `rgb(${255 - i * 10},0,${255 - i * 10})`;
    
    arrayOfShapesFour.push(
      new ShapeDef((i + 1) * 55, 50, "shape", 'square', color)
    );
  }

add_New_Els_ToDOM(arrayOfShapesFour, fourthRow);


/***** TO FILL IN */
function mapArraysShape(){
  console.log(arrayOfShapes);
  // MAP ONE
  let arrayOfShapesNew = arrayOfShapes.map(changeShape);
  add_New_Els_ToDOM(arrayOfShapesNew, originalRow);
  function changeShape(el){
      return (
      /* need to make a copy */
      new ShapeDef(el.x, el.y+100, el.shapeClass,"circle",el.color)
      )


}
function mapArraysColor() {
 console.log(arrayOfShapes);
  //MAP TWO
  let arrayOfShapesNew = arrayOfShapes.map(changeColor);
  add_New_Els_ToDOM(arrayOfShapesNew, originalRow);
  console.log(arrayOfShapesNew)

  function changeColor(el){
      let temp = getColorObj(el.color);
      let color = `rgb(${temp [1]},${temp[0]},${temp[2]})`
      return (
      /* need to make a copy */
      new ShapeDef(el.x, el.y+200, el.shapeClass,el.customShapeClass,color)
      )

    }
}

function filterArraysX(){
  //console.log(arrayOfShapesTwo);
    // FILTER ONE
    // let filterArraysX= arrayOfShapesTwo.filter(smaller_posX);
 
    // function smaller_posX(el){
    //     return(
    //         (el.x > 200)
    //     )
    // }
 
    // console.log(filterArraysX);
    // //then we can map - to change the y :)
    // let arrayOfShapesNew = filterArraysX.map(
    //     function(el){
    //         return (new ShapeDef(el.x, el.y+100, el.shapeClass,el.customShapeClass,el.color))
 
    // });
    // add_New_Els_ToDOM(arrayOfShapesNew, secondRow);
}

function filterArraysByShape(){
  // FILTER ONE
  // let filterArraysShape= arrayOfShapesTwo.filter(shape_filter);
 
  // function shape_filter(el){
  //     return(
  //         (el.customShapeClass ==='circle')
  //     )
  // }

  // //then we can map - to change the y :)
  // let arrayOfShapesNew = filterArraysShape.map(
  //     function(el){
  //         return (new ShapeDef(el.x, el.y+200, el.shapeClass,el.customShapeClass,el.color))

  // });
  // add_New_Els_ToDOM(arrayOfShapesNew, secondRow);
}

function forEachCallBackA(){
  // document.querySelector("#pSpan").innerHTML=""
  //   arrayOfShapesThree.forEach(addPTags)
 
  //   function addPTags(el){
  //       document.querySelector("#pSpan").innerHTML+= `<span> x:${el.x} <span>`
  //   }
}
function forEachCallBackB(){
  // document.querySelector("#pSpan").innerHTML=""
  // arrayOfShapesThree.forEach(addPTags)

  // function addPTags(el){
  //     document.querySelector("#pSpan").innerHTML+= `<span> y:${el.y} <span>`

  // }

}
function findCallBackA(){
  //get an object back whose x> 200
  // const foundObj = arrayOfShapesFour.find(
  //   function(el){
  //       return(el.x>200)
  //   })
  //   console.log(foundObj)
  //   if(foundObj)
  //   add_SingleToDOM(foundObj, fourthRow)
}


function findCallBackB(){
   //get an object back whose y> 40
   const foundObj = arrayOfShapesFour.find(
    function(el){
        return(el.y>40)
    })
    console.log(foundObj)
    if(foundObj)
    add_SingleToDOM(foundObj, fourthRow)
}
/******* HELPERS */
function add_SingleToDOM(shapeDef, parent) {
      let el = document.createElement("div");
      el.classList.add(shapeDef.shapeClass);
      el.classList.add(shapeDef.customShapeClass);
      parent.appendChild(el);
      el.style.background = shapeDef.color;
      el.style.left = `${shapeDef.x}px`;
      el.style.top = `${shapeDef.y+100}px`;
    
  }



  function add_New_Els_ToDOM(arrayDef, parent) {
    for (let i = 0; i < arrayDef.length; i++) {
      let el = document.createElement("div");
      el.classList.add(arrayDef[i].shapeClass);
      el.classList.add(arrayDef[i].customShapeClass);
      parent.appendChild(el);
      el.style.background = arrayDef[i].color;
      el.style.left = `${arrayDef[i].x}px`;
      el.style.top = `${arrayDef[i].y}px`;
    }
  }

  /* FROM WEEK 2 */
  function getColorObj(inColor) {
    let substringColor = inColor.substring(
      inColor.indexOf("(") + 1,
      inColor.indexOf(")")
    );
    let rgbArray = [];
    rgbArray = substringColor.split(",");
    return rgbArray;
  }
//   const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(
//     function (num) { 
//         return(
//         num * num
//         )
//     }
  // );
};
// const donuts = [
//   { name: 'mondays_donut', type: 'sparkly' },
//   { name: 'tuesdays_donut', type: 'shiny' },
//   { name: 'wednesdays_donut', type: 'squashy' }
// ];
// /** REDUCE */
// const numbers_n = [11, 2, 32, 4, 5,70];

// const sum = numbers_n.reduce(
//     function (accum, initval) 
//     {
//         return(accum + initval)
//     },0)

// //console.log(sum);
// const newObjectFromArray = donuts.reduce((accum, item) => {
//   /* accumulator is the array building */
//   console.log(accum)
// // add object key to our object i.e. mondays_donut: { type: 'sparkly' }
// accum[item.name] = {type: item.type };
// return accum;
// },{});
// console.log(newObjectFromArray)

const fruits = ["apples", "grapes", "pears"];
const colors = ["blues", "reds", "oranges", "purples", "yellows"]
const food= [...fruits, "carrots", "patatoes", "turnips"];
console.log(food)

const moreFoodAndColorAgain= [...food,...colors]
console.log(moreFoodAndColorAgain)
}
