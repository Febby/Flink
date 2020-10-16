const videoElement = document.getElementById('video');
const PipButton = document.getElementById('btn');
const loadButton = document.getElementById('load-video')

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        // console.log("Running")
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;

        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        console.log('Whoops,theres an error:', error);
    }
}

loadButton.addEventListener('click', () => {selectMediaStream();})

PipButton.addEventListener('click', async () => {
    //disable button
    PipButton.disabled = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    PipButton.disabled = false;
});
//on Load

