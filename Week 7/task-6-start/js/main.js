window.onload = run;

function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


  /****** PART A:: FETCH */
  async function fetchText() {
    console.log("in fetch");
    let raw_rainbow_text = `A rainbow is an optical and meteorological phenomenon that is caused by both reflection and refraction of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
Rainbows can be full circles, however, the average observer sees only an arc, formed by illuminated droplets above the ground,[1] and centred on a line from the sun to the observer's eye.
In a "primary rainbow", the arc shows red on the outer part and violet on the inner side. This rainbow is caused by light being refracted (bent) when entering a droplet of water, then reflected inside on the back of the droplet and refracted again when leaving it.
In a double rainbow, a second arc is seen outside the primary arc, and has the order of its colours reversed, red facing toward the other one, in both rainbows. This second rainbow is caused by light reflecting twice inside water droplets.
In a double rainbow, a second arc is seen outside the primary arc, and has the order of its colours reversed, red facing toward the other one, in both rainbows. This second rainbow is caused by light reflecting twice inside water droplets.`;
    try {
      let response = await fetch("files/rainbow.txt");
      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status:${response.status}`)
      // }
      raw_rainbow_text = await response.text();

      document.getElementById('stepOneButton').style.display = 'none';
      document.getElementById('inputDiv').style.display = 'block';
      // let raw_rainbow_text = await response.text();
      document.getElementById('rainbow_text').textContent = raw_rainbow_text;
      // console.log(raw_rainbow_text);
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      runPartB(raw_rainbow_text);
    } catch (e) {
      console.error("Error fetching text", e);
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

    /* FILL IN HERE */
    function producePoem() {
      console.log(originalRainBowText)
      let userInput = document.getElementById('phrase').value;

      let splitPattern = /[.!?\\n]+/;

      let phrase_as_array = userInput.split(splitPattern).filter(word => word.length > 0);

      let rainbow_tokens = originalRainBowText.split(splitPattern).filter(word => word.length > 0);
      //SR
      runPartC(rainbow_tokens, phrase_as_array);

    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_tokens, seed_phrase_array) {
    console.log("Rainbow Tokens:", rainbow_tokens);
    console.log("Seed Phrase Array:", seed_phrase_array);

    let poem_sentence = ''; // Initialize the poem sentence
    const outputDiv = document.getElementById("output"); // Reference to the output div

    // Clear previous content in the output div before generating new visualization
    outputDiv.innerHTML = '';

    // Unhide the output div (this will make the div visible)
    outputDiv.style.display = 'block';

    // Iterate over each word in the seed phrase array
    for (let i = 0; i < seed_phrase_array.length; i++) {
      let seed_word = seed_phrase_array[i]; // Current word from the seed phrase
      console.log(`Processing word: ${seed_word}`);
      let matched_words = []; // Array to hold matched words for the current word in the seed phrase

      // Iterate over each character in the seed word
      for (let j = 0; j < seed_word.length; j++) {
        let nextChar = seed_word[j]; // Current character from the seed word
        let found = false;

        console.log(`  Looking for '${nextChar}' at position ${j + 1}`);

        // Find a word in the rainbow_tokens array that has nextChar in the same position
        for (let k = 0; k < rainbow_tokens.length; k++) {
          let rainbow_word = rainbow_tokens[k];

          // Ensure the rainbow word is long enough and matches the character at position j
          if (rainbow_word[j] === nextChar) {
            console.log(`    Found match: ${rainbow_word} at index ${k}`);

            // If it matches, add the word to the matched_words array
            matched_words.push(rainbow_word);

            // Remove the word from rainbow_tokens after matching (without causing skipping)
            rainbow_tokens.splice(k, 1);
            found = true;
            break; // Move to the next character in the seed word
          }
        }

        // If no match was found for the character, log an error and exit
        if (!found) {
          console.log(`    No match found for character '${nextChar}' at position ${j + 1} in word '${seed_word}'`);
          return; // Exit the function
        }
      }

      // After processing all characters of the seed word, join the matched words and add to the poem_sentence
      poem_sentence += matched_words.join(' ') + ' ';

      // Create a visual box for each matched word and append to output
      matched_words.forEach(word => {
        let wordBox = document.createElement("span"); // Create a new span for the word box
        wordBox.textContent = word; // Set the text to the word
        wordBox.style.display = "inline-block"; // Make it inline-block for styling
        wordBox.style.padding = "10px";
        wordBox.style.margin = "5px";
        wordBox.style.border = "2px solid #000";
        wordBox.style.borderRadius = "5px";
        wordBox.style.fontSize = "18px";
        wordBox.style.fontFamily = "Arial, sans-serif";
        wordBox.style.backgroundColor = getRandomColor(); // Random background color for each box
        wordBox.style.color = "#fff"; // Text color

        // Optional: Add interactivity with mouseover and mouseout effects
        wordBox.addEventListener("mouseover", () => {
          wordBox.style.transform = "scale(1.2)";
          wordBox.style.transition = "transform 0.3s ease";
        });

        wordBox.addEventListener("mouseout", () => {
          wordBox.style.transform = "scale(1)";
        });

        // Append the word box to the output div
        outputDiv.appendChild(wordBox);
      });
    }

    // Trim any extra space at the end and call runPartD with the result
    poem_sentence = poem_sentence.trim();
    console.log("Generated Poem Sentence:", poem_sentence);
    runPartD(poem_sentence);
  }


  /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence) {
    // Unhide the output div
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";  // Make the div visible

    // Initialize an empty string to hold the visualized poem
    let visualized_poem = '';

    // Iterate over each character in the poem sentence
    for (let i = 0; i < new_sentence.length; i++) {
      let currentChar = new_sentence[i];

      // If it's a space, add a space to the visualization
      if (currentChar === ' ') {
        visualized_poem += `<span class="space"> </span>`;
      } else {
        // For each character, generate a visual effect with random color, size, and font
        let randomColor = getRandomColor();
        let randomFontSize = getRandomFontSize();
        let randomFontFamily = getRandomFontFamily();

        // Add the character to the visualized poem with styles
        visualized_poem += `
                <span 
                    class="letter" 
                    style="
                        color: ${randomColor}; 
                        font-size: ${randomFontSize}; 
                        font-family: ${randomFontFamily}; 
                        transition: transform 0.3s ease;
                    "
                    onmouseover="this.style.transform='scale(1.5)'"
                    onmouseout="this.style.transform='scale(1)'"
                    onclick="this.style.color='${getRandomColor()}'"
                >
                    ${currentChar}
                </span>
            `;
      }
    }

    // Insert the visualized poem into the output div
    outputDiv.innerHTML = visualized_poem;
  }

  // Helper function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Helper function to generate a random font size
  function getRandomFontSize() {
    return `${Math.floor(Math.random() * 30) + 16}px`; // Random size between 16px and 45px
  }

  // Helper function to generate a random font family
  function getRandomFontFamily() {
    const fonts = ['Arial', 'Courier New', 'Georgia', 'Verdana', 'Tahoma', 'Comic Sans MS', 'Roboto'];
    return fonts[Math.floor(Math.random() * fonts.length)];
  }


  /****** PART E:: RESET  */
  function resetPoem() {
    /*** TO FILL IN */
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';

    outputDiv.style.display = "none";

    const phraseInput = document.getElementById("phrase");
    phraseInput.value = '';

    const stepOneButton = document.getElementById("stepOneButton");
    if (stepOneButton) {
      stepOneButton.style.display = "block";
    }
  } //window onload
}

