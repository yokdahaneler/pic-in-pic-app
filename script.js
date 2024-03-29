const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

//on load
button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //start pic in pic
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});
selectMediaStream();
