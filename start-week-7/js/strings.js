window.onload = function () {
console.log(" hello strings")

let text = `A rainbow is an optical and meteorological phenomenon that is caused by 
   both reflection and refraction of light in water droplets resulting in a spectrum of 
   light appearing in the sky! Does it takes the form of a multicoloured arc? 
   Rainbows caused by sunlight always appear in the section of sky directly 
   opposite the sun.In a double rainbow, a second arc is seen outside the primary arc.`
   let container_3 =  document.querySelector("#inner-container_3");
   let newDelimiter = /[.?!|]/
   //let newDelimiter="?"
   let splitSentences =  text.split(newDelimiter);
   container_3.innerHTML+=`<p>  Delimiter : MULTIPLE </p>`;
  for(let i = 0; i<splitSentences.length;i++ ){
    container_3.innerHTML+=`<p> Element <span style = "color:crimson"> ${i}</span>: 
   ${splitSentences[i]}</p>`;
  }

//let container =  document.querySelector("#inner-container");
 
//     let sentence = "The quick brown fox jumps over the lazy dog.";
//     container.innerHTML = `<p>${sentence}</p>`
 
//     container.innerHTML +=
//     `<p>index of <span style = "color:crimson">quick</span>: 
//     ${sentence.indexOf('quick')}</p>`;
 
//     container.innerHTML +=
//     `<p>index of <span style = "color:crimson">fo</span>: 
//     ${sentence.indexOf('fo')}</p>`;
 
//     container.innerHTML +=
//     `<p>index of <span style = "color:crimson">The</span>: 
//     ${sentence.indexOf('The')}</p>`;
 
//     container.innerHTML +=
//     `<p>index of <span style = "color:crimson">the</span>: 
//     ${sentence.indexOf('the')}</p>`;
 
//     container.innerHTML +=
//     `<p>index of <span style = "color:crimson">blah blah</span>: 
//     ${sentence.indexOf('blah blah')}</p>`;

//     let container_2 =  document.querySelector("#inner-container_2");
 
//     let sentence_2 = "The quick brown fox jumps over the lazy dog.";
//     container_2.innerHTML = `<p>${sentence_2}</p>`
 
//     let phrase = sentence_2.substring(4, 9);
//    container_2.innerHTML +=
//    `<p> substring of <span style = "color:crimson">sentence_2.substring(4, 9)</span>: 
//    ${phrase}</p>`;
 
//    let phrase_2 = sentence_2.substring(4, 20);
//    container_2.innerHTML +=
//    `<p> substring of <span style = "color:crimson">sentence_2.substring(4, 20)</span>: 
//    ${phrase_2}</p>`;
//    let container_3 =  document.querySelector("#inner-container_3");
//    let original_text = "The quick brown fox jumps over the lazy dog.";
//    let delimiter = " "; // delimiter == space
//    let splitSentence =  original_text.split(delimiter);
//     container_3.innerHTML+=`<p>  Delimiter : SPACE </p>`;
//    for(let i = 0; i<splitSentence.length;i++ ){
//      container_3.innerHTML+=`<p> Element <span style = "color:crimson"> ${i}</span>: 
//     ${splitSentence[i]}</p>`;
//    }
};
