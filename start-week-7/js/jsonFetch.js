window.onload = goApp;

async function goApp(){
console.log("hello fetch")
try{
 
    let response = await fetch('../files/tests.json'); //response
    // let parsedResultJS = await response.json();
    // console.log(parsedResultJS)
//     let textResult = await response.text();
// console.log(textResult)
displayResults();
let parsedResultJS = await response.json();
 console.log(parsedResultJS)
   }
   catch(err){
    
       console.log(err)
   }
   function displayResults(parsedResultJS){
    for (let i=0; i< parsedResultJS.length; i++){
        console.log(parsedResultJS)
 
        //the object
        let donutObj = parsedResultJS[i];
        //container
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("donutItem");
        document.querySelector("#output").appendChild(containerDiv);
 
        let title = document.createElement("h3");
        title.textContent = donutObj.name;
        containerDiv.appendChild(title)
 
        //access the image
        let donutImage = document.createElement("img");
        donutImage.src = donutObj.image;
        containerDiv.appendChild(donutImage)
 
        //access flavours
        let flavours = donutObj.flavours;
 
        //create a title for the list of flavours
        let sub_title = document.createElement("h5");
        sub_title.textContent = "Flavours:"
        containerDiv.appendChild(sub_title);
 
 
        //build a list
        let fl_list = document.createElement("ul");
        containerDiv.appendChild(fl_list)
        for(let j = 0; j< flavours.length; j++){
            //console.log(flavours[j])
            //add flavour
            let flavour = flavours[j];
            let fl_item = document.createElement("li");
            fl_item.textContent = flavour.type;
            fl_list .appendChild(fl_item)
        }
 
        //access toppings
        let toppings = donutObj.toppings;
 
        let sub_title_top = document.createElement("h5");
        sub_title_top.textContent = "Toppings:"
        containerDiv.appendChild(sub_title_top);
 
        let t_list = document.createElement("ul");
        containerDiv.appendChild(t_list)
 
        for(let k = 0; k< toppings.length; k++){
            //console.log(flavours[j])
            //add flavour
            let topping = toppings[k];
            let t_item = document.createElement("li");
            t_item.textContent = topping;
            t_list.appendChild(t_item)
        }
    }
 
}
}