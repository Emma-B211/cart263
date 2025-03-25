window.onload = async function(){
    console.log("task 7-8");

    try{
         let response= await fetch('data/iris.json');
         let parsedResultJS = await response.json();
        // console.log(parsedResultJS);
        
         let possibleColor=["#5d3fd3","#a73fd3","#d33fb5","#d32d3f","#d3a73f"];

         let irisesWithColors=parsedResultJS.map(iris=>{
            const randomColor= possibleColor[Math.floor(Math.random()*possibleColor.length)];
            
            return{
                ...iris,
                color: randomColor
            };
         });

         // to sorted
const irisesWithColorsSorted = irisesWithColors.toSorted((a,b)=> a.petalWidth-b.petalWidth);
console.log(irisesWithColorsSorted);

// sepal width greater than 1.2
         const allSepalWidthsGreaterThan1_2= irisesWithColors.every(iris=> iris.sepalWidth > 1.2);
        // console.log(allSepalWidthsGreaterThan1_2);
// petal width every < 3

const allPetalWidthsLessThan3= irisesWithColors.every(iris => iris.petalWidth < 3);
//console.log(allPetalWidthsLessThan3);



//some == 4.2
const hasPetalLengthEqualTo4_2= irisesWithColors.some(iris => iris.petalLength ==4.2);
//console.log(hasPetalLengthEqualTo4_2);


// some> 10
const hasLargePetalLength=irisesWithColors.some(iris=> iris.petalLength >10);
//console.log(hasLargePetalLength);


// find 1.0
const irisWithLargePetalWidth=irisesWithColors.find(iris => iris.petalWidth > 1.0);
//console.log(irisWithLargePetalWidth);

// filter >= 4
         let filterIrises= irisesWithColors.filter(iris=> iris.sepalWidth >= 4);
         console.log(filterIrises);
// reduce
         const totalPetalLength=irisesWithColors.reduce((sum,iris)=> sum +iris.petalLength,0);
         const averagePetalLength= totalPetalLength/irisesWithColors.length;
         //console.log('average petal length:', averagePetalLength);
        //  function smaller_iris(){

        //  }
        // console.log(irisesWithColors);
    }
    catch(err){
        console.log(err)
    }
    //irisesWithColors=[]

}