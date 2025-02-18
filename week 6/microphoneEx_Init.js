window.onload = getMicrophoneInput;

async function getMicrophoneInput() {
  console.log("here we are ");

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext = new AudioContext(); //using the web audio library
  // get the canvas
  let canvas = document.getElementById("drawingCanvas");
  //get the context
  let context = canvas.getContext("2d");

  try {
    //returns a MediaStreamAudioSourceNode.
    let audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    // console.log(audioStream)
    //pass the microphone input to the web audio API
    let microphoneIn = audioContext.createMediaStreamSource(audioStream);
    const filter = audioContext.createBiquadFilter();
    const analyser = audioContext.createAnalyser();
    //creates an analyser node
    //https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
    //https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
    //https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData

    // microphone -> filter ->  analyzer->destination
    microphoneIn.connect(filter);
    //use the analyzer object to get some properties ....
    filter.connect(analyser);

    //timeDomainData();
    //freqData();
    visualizeTimeAndFreq();

    function visualizeTimeAndFreq() {
      const WIDTH = 500;
      const HEIGHT = 500;

      analyser.fftSize = 1024; // fft conversion from time to frequency samples
      //console.log (analyser.frequencyBinCount) //half of fft size
      const bufferLength = analyser.fftSize;
      const dataArrayFreq = new Uint8Array(bufferLength);
      const dataArrayTime = new Uint8Array(bufferLength);

      let drawVisual = requestAnimationFrame(animateVisual);
      function animateVisual() {
        analyser.getByteFrequencyData(dataArrayFreq);
        //each respective frequency goes in its own bin
        //lowest to highest frequency domain

        /* looking for dominant frequencies*/
        /* higher bars === more dominant frequency  (db)*/

        //VISUALIZE THE SOURCE (AMPLITUDE) OVER TIME
        // variance of amplitude over time
        analyser.getByteTimeDomainData(dataArrayTime);

        //clear with each frame
        context.fillStyle = "rgb(0 0 0)";
        context.fillRect(0, 0, WIDTH, HEIGHT);

        //1 draw wave form
        context.fillStyle = "rgb(200 200 200)";
        context.lineWidth = 2;
        context.strokeStyle = "rgb(144 12 63)";
        const sliceWidth = (WIDTH * 1.0) / bufferLength;
        //x == 0 each time slice
        let x = 0;

        //draw a continuous path made up of multiple points
        // (x is time y is the amplitude)
        context.beginPath();
        for (let i = 0; i < bufferLength; i++) {
          const v = dataArrayTime[i] / 128.0;
          const y = (v * HEIGHT) / 2;

          //first element
          if (i === 0) {
            context.moveTo(x, y);
            //line between
          } else {
            context.lineTo(x, y);
          }
          //go to next x
          x += sliceWidth;
        }

        //go to width height/2
        context.lineTo(WIDTH, HEIGHT / 2);
        context.stroke();

        //2: draw frequency spectrum
        const barWidth = (WIDTH / bufferLength) * 5;
        let barHeight;
        let x2 = 0;

        //each bin represents a given frequency
        for (let i = 0; i < bufferLength; i++) {
          //frequency value in that bin (more dominant will be higher)
          barHeight = dataArrayFreq[i];

          context.fillStyle = `rgb(${barHeight + 100} 50 50)`;
          context.fillRect(x2, HEIGHT - barHeight, barWidth, barHeight);

          x2 += barWidth + 1;
        }
        drawVisual = requestAnimationFrame(animateVisual);
      }
    }
  } catch (err) {
    /* handle the error */
    console.log("had an error getting the microphone");
  }
}