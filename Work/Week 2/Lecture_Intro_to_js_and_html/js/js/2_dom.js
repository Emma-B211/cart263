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

    /** 
        //this is for accessing which is needed if we want to change things
        console.log(document.getElementById("two").innerHTML)
    
        console.log(document.getElementById("two").textContent)
    
        console.log(document.querySelector("#five").getAttribute("class"))
    
        //if you see () like .getAttribute("class") that a function
        //but if there isnt () then thats an attribute that is an array
        console.log(document.querySelector("#two").classList)
    
        //also give an array as in the console there are brackets []
        console.log(document.querySelector("#two").getAttributeNames())
    
        console.log(document.querySelector("#one").style)
    
        console.log(document.querySelector("#one").style.background)
    
        console.log(document.querySelector("#six").style.width)
    */


    /** 
        console.log(document.querySelector("span").parentElement)
    
        console.log(document.querySelector("span").parentElement.parentElement)
        //there are multiple therefore it will come as an array
        console.log(document.querySelector(".wrapper_flex_box").children)
    
        console.log(document.querySelector(".wrapper_flex_box").children[0])
    */


    /** 
//THIS IS TO MAKE CHNAGES TO THE HTML FROM JAVASCRIPT
//.innerHTML goes into the html file and then we say = therefore it records my change and chnages its name
document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header<h2>"
*/


    /** 
        //textContent just sees it as text therefore the tags <h2> will still appear therefore we need 
        //to add innerHTML so it uses HTML language
        document.querySelector("#two").children[0].textContent = "<h2> this is now a header<h2>"
    */


    /** 
        //get the group
        let allSquareShapes = document.querySelectorAll(".square_shape");
        //go through each element
        for (let singleSquareShape of allSquareShapes) {
            //get children
            console.log(singleSquareShape.children[0])
            singleSquareShape.children[0].textContent += "adding content"
        }
    */

    /** 
        document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
        document.querySelector("p span").classList.add("change_span");
    */
    /** 
        //add
        document.querySelector("#four").style.background = "cornflowerBlue";
        document.querySelector("#four").style.borderColor = "darkblue";
        //modify
        document.querySelector("#one").style.background = "pink";
        document.querySelector("#one").style.borderColor = "darkblue";
    */


    /** 
        // the key is first so i want to set an id and the second one in the () is what we set it as 
        document.querySelectorAll(".another_class")[0].setAttribute("id", "newTest")
        console.log(document.querySelectorAll(".another_class")[0])
    */

    //we can create a new element like exemple div,class and more. add it form the javascript
    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = "<p> NEW ELEMENT </p>";
    newDiv.style.backgroundColor = "purple";

    console.log("newDiv")

    //this is how it places and now where to place it so basically that for wrapper_flex_box 
    //at this parent element it will add it which will add it at the complete end.
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)


}