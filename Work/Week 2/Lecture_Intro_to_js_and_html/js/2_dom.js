window.onload = setup
function setup() {
    console.log("running setup");
    /** 
        //if you use getElementById and the querySelctor only get one element
        //but if you use getElementByTagName = you get an array
        console.log(document.getElementById("one"))
        console.log(document.querySelector("#one"))
        //if you want to access a class you use a . ex: .one if you need to find a id then use # ex: #one
        console.log(document.getElementByTageName("div"))
    
        //this will select the elelemt in the 0 position therefore the first one
        console.log(document.getElementByTagName("div")[0])
    
        //this in the consol will gitve the number in the array
        console.log(document.getElementByTagName("div").lenght)
    
        console.log(document.querySelector("div").lenght)
    
        console.log(document.querySelectorAll("div"))
    
        console.log(document.getElementByClassName("square_shape").lenght);
    
        console.log(document.querySelectorAll(".square_shape"))
    
        console.log("running setup");
    */

    //this is for accessing which is needed if we want to change things
    console.log(document.getElementById("two").innerHTML)

    console.log(document.getElementById("two").textContent)



}