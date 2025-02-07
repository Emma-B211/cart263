window.onload = setup;
function setup(){
    console.log("events!")
    let introSection = document.querySelector("#intro");
    introSection.addEventListener("click",introMouseClickCallback
   );

function introMouseClickCallback(e){
    console.log(this);
    console.log(e)

    let cssObj = window.getComputedStyle(this, null);
    let bgColor = cssObj.getPropertyValue("background-color");
    //console.log(bgColor);


 let backgroundColorArray = getColorObj(bgColor);
 console.log(backgroundColorArray)
 // if(this.getAttribute("custom-bool") === "inactive")
 // {
 //a:

 if(this.getAttribute("custom-bool") === "inactive")
    { this.setAttribute("custom-bool","active")
        // set outer div
  this.style.background = `rgba(
                           ${backgroundColorArray[0]},
                           ${backgroundColorArray[1]},
                           ${backgroundColorArray[2]},
                           0.5)`;
 document.querySelector(`#${this.id} p`).style.background = `rgba(
                                             ${backgroundColorArray[0]},
                                             ${backgroundColorArray[1]},
                                             ${backgroundColorArray[2]},
                                             0.75)`;
} else{
    this.setAttribute("custom-bool","inactive");
    this.style.background = `rgba(
        ${backgroundColorArray[0]},
        ${backgroundColorArray[1]},
        ${backgroundColorArray[2]},
        1.0)`

    document.querySelector(`#${this.id} p`).style.background =""
};
}

document.querySelector("#bubbleButton").addEventListener("click",createBubble)

 
function createBubble(e){
    console.log("button clicked")
 let bubble =  document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = `${Math.random()*(window.innerWidth-200) }px`;
  bubble.style.top = `${Math.random()* (window.innerHeight-200) }px`;

  let r = Math.ceil(Math.random()*255); //new Math.ceil
  let g =Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);

  bubble.style.background = `rgba(${r},${g},${b})`;
  document.getElementById("top-layer").appendChild(bubble)

}
 function getColorObj(inColor) {
    let substringColor = inColor.substring(
      inColor.indexOf("(") + 1,
      inColor.indexOf(")")
    );
    let rgbArray = [];
    rgbArray = substringColor.split(",");
    return rgbArray;
  }
  
}



