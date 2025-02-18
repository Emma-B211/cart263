window.onload = getLiveVideo;
 
window.onload = getLiveVideo;
 
async function getLiveVideo() {
  console.log("loaded");
  let video = document.getElementById("video");
  console.log(video.srcObject);
 
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 320,
        height: 240,
      },
    });
    video.srcObject = stream;
    console.log(video.srcObject) //here there is something
  } catch (err) {
    /* handle the error */
    console.log("had an error getting the camera");
  }
}