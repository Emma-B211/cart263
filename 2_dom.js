window.onload = setup
function setup(){ 
   // console.log(document.getElementById("one"));

//    console.log(document.getElementByTagName("div"));
//    console.log(document.getElementByTagName("div").length);
//    console.log(document.getElementByTagName("div")[0]);
//    console.log(document.querySelector("div").length);
//    console.log(document.querySelector("div"));


//    console.log(document.getElementsByClassName("square_shape")[0]);
//    console.log(document.querySelector(".square_shape"));
//     console.log("running setup");
   

//console.log(document.getElementById("two").innerHTML)
//console.log(document.getElementById("two").textContent)
// console.log(document.querySelector("#two").children[0])
//document.querySelector("#two").children[0].textContent="<H2> This is now a header </2>";

//get the group
// let allSquareShapes = document.querySelectorAll(".square_shape");
// //go through each element
// for(let  singleSquareShape of allSquareShapes){
//     //get children
//    console.log(singleSquareShape.children[0])
//    singleSquareShape.children[0].textContent+="adding content"
// }

//document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
  //document.querySelector("p span").classList.add("change_span");

//   document.querySelector("#four").style.background = "cornflowerBlue";
//   document.querySelector("#four").style.borderColor = "darkblue"; 

//   document.querySelectorAll(".another_class")[0].setAttribute("id","newTest") 

 //new element
 let newDiv = document.createElement("div");
 newDiv.classList.add("square_shape");
 newDiv.innerHTML = "<p> NEW ELEMENT </p>";
 newDiv.style.backgroundColor = "purple";
 console.log(newDiv)
// access parent element
let parentElement = document.querySelector(".wrapper_flex_box")
parentElement.appendChild(newDiv)


}