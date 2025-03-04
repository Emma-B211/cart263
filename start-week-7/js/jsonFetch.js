window.onload = goApp;

async function goApp(){
console.log("hello fetch")
try{
 
    let response = await fetch('../files/test.json'); //response
    let parsedResultJS = await response.json();
    console.log(parsedResultJS)
   }
   catch(err){
    
       console.log(err)
   }
}