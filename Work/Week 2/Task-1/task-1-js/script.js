window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE: */ console.log(document.querySelectorAll("p"))
    /***OUTPUT: 
     * NodeList(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
     */


    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */  console.log(document.querySelectorAll("p")[0])
    /***OUTPUT: 
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */ console.log(document.querySelectorAll(".inner-container"))
    /***OUTPUT: 
     * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
     */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    // how to find the last numer of the array console.log(document.querySelectorAll(".img-container").length - 1)
    console.log(document.querySelectorAll(".img-container")[7])
    /***OUTPUT: 
     * <div class="img-container">
     * <img class="img-image" src="task-1-images/seventeen.png">
     * </div>
     */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
  /*** 5A: */   console.log(document.querySelectorAll("h2"))
  /*** 5B: */   console.log(document.querySelectorAll("h2").length)
  /*** 5C: */   console.log(document.querySelectorAll("h2")[0].textContent)
    /***OUTPUT: 
     * 5A : NodeList [h2]
    "0": h2

     *5B: 1

     *5C: The header of this fancy page

     */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */ console.log(document.getElementById("parent"))
    /***OUTPUT: 
     * <section id="parent"> .... </section>
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */
    // document.querySelectorAll("p")[0].innerText = "Bianca Gauthier and Emma Beldick, 2025-01-21"
    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE */
    // document.querySelectorAll(".content-container")[0].style.background = "orange";
    // document.querySelectorAll(".content-container")[1].style.background = "purple";
    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */
    // document.querySelectorAll(".img-image")[0].src = "task-1-images/seven.png"
    /*************************************** */
    /* 4: Select the third paragraph element on the page and 
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE */
    // document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"

    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and 
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */
    // document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </h2>"
    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */
    // document.querySelectorAll("p")[4].classList.add(".newStyle")
    // document.querySelectorAll("p")[4].innerHTML += "<img src= 'task-1-images/one.png'/>"

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */


    // let colors = ['red', 'blue', 'green', 'orange'];
    // let innerContainers = document.getElementsByClassName('inner-container');

    // for (let i = 0; i < colors.length; i++) {
    //     if (innerContainers[i]) {
    //         innerContainers[i].style.backgroundColor = colors[i];
    //     }
    // }

    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new paragraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    // access all paragraphs

    // function to create 
    let allPTagsThree = document.querySelectorAll('p');

    function customCreateElement(parent) {
        console.log("Creating new element for:", parent);

        let newParagraph = document.createElement('p');

        newParagraph.textContent = "Using ceateElement";

        newParagraph.style.backgroundColor = "green";

        newParagraph.style.color = "white";

        parent.appendChild(newParagraph);
    }
    // let allPTagsThree = document.getElementsByTagName('p');
    allPTagsThree.forEach((pTag) => {
        customCreateElement(pTag);
    });

    /***EXPLANATION::
     * after adding each step of the code, it is being run however it is continously been read without any limit
     *  Creating new element for: <p id=​"1">​" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus officiis non quasi officia sit veniam! "<p style=​"background-color:​ green;​ color:​ white;​">​Using ceateElement​</p>​</p>​
    script.js:155 Creating new element for: <p id=​"2" class=​"img-descript">​…​</p>​
    cript.js:155 Creating new element for: <p id=​"3" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"4" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"5" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"6" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"7" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"8" class=​"img-descript">​…​</p>​
    script.js:155 Creating new element for: <p id=​"9" class=​"img-descript">​…​</p>​
     * 
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    // function customNewBoxCreate(parent) {
    //     let newDiv = document.createElement("div");
    //     newDiv.className = 'testDiv'
    //     parent.appendChild(newDiv);
    //     return newDiv;
    //     // newDiv.innerHTML="<p> </p>";
    //     // newDiv.style.backgroundColor="";
    //     // //access parent element
    //     // let parentElement = document.querySelector()
    //     // parentElement.appendChild(newDiv);

    // }
    // let newGridParent = document.getElementById('new-grid');

    // for (let row = 0; row < 10; row++) {
    //     for (let col = 0; col < 10; col++) {
    //         let returnedDiv = customNewBoxCreate(newGridParent);
    //         returnedDiv.style.position = 'absolute';

    //         returnedDiv.style.left = `${col * 50}px`;
    //         returnedDiv.style.top = `${row * 50}px`;

    //         if (row % 2 === 0) {
    //             returnedDiv.style.backgroundColor = 'white';
    //         } else {
    //             returnedDiv.style.backgroundColor = 'cornflowerblue';
    //         }



    //         if (row % 2 === 0) {
    //             returnedDiv.textContent = 'EVEN';
    //         } else {
    //             returnedDiv.textContent = 'ODD';
    //         }
    //     }
    //     let allTestDivs = document.getElementsByClassName('testDiv');
    //     console.log("Number of .testDiv elements:", allTestDivs.length);
    // }

    /***EXPLANATION::
     * after creating the function and adding new div to add the rows and columns underneath the grid
     * we used a for loop and arrays
     * 
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
        when dividing by three. */

    /***CODE */
    // function customNewBoxCreate(parent) {
    //     let newDiv = document.createElement('div');
    //     newDiv.className = 'testDiv';
    //     parent.appendChild(newDiv);
    //     return newDiv;
    // }
    // let newGridThreeParent = document.getElementById('new-grid-three');

    // for (let row = 0; row < 10; row++) {
    //     for (let col = 0; col < 10; col++) {
    //         let returnedDiv = customNewBoxCreate(newGridThreeParent);
    //         returnedDiv.style.position = 'absolute';

    //         returnedDiv.style.left = `${col * 50}px`;
    //         returnedDiv.style.top = `${row * 50}px`;

    //         if (col % 3 === 0) {
    //             returnedDiv.style.backgroundColor = 'red';
    //             returnedDiv.textContent = '0';
    //         } else if (col % 3 === 1) {
    //             returnedDiv.style.backgroundColor = 'orange';
    //             returnedDiv.style.textContent = '1';
    //         } else if (col % 3 === 2) {
    //             returnedDiv.style.backgroundColor = 'yellow';
    //             returnedDiv.textContent = '2'

    //         }
    //     }

    // }
    /***EXPLANATION::
     * 
     * Number of .testDiv elements: 10
    script.js:262 Number of .testDiv elements: 20
    script.js:262 Number of .testDiv elements: 30
    script.js:262 Number of .testDiv elements: 40
    script.js:262 Number of .testDiv elements: 50
    script.js:262 Number of .testDiv elements: 60
    script.js:262 Number of .testDiv elements: 70
    script.js:262 Number of .testDiv elements: 80
    script.js:262 Number of .testDiv elements: 90
    script.js:262 Number of .testDiv elements: 100
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}