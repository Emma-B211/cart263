window.onload = function(){
    console.log("move");

    let drawBox = document.querySelector("#draw-box-a");
 
//A: add event listener + callback
drawBox.addEventListener("mousemove", moveCallBack);
 
function moveCallBack(e){
    console.log("mouse move");
    // B: note these are the same ... 
    console.log(this);
    console.log(e.target);

    //C: get the mouse coords
    console.log(e.clientX,e.clientY) 
}
}