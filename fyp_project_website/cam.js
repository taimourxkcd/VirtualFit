const openWebcamButton = document.querySelector("#openWebcamButton");

openWebcamButton.addEventListener("click", () => {
  const constraints = {
    video: true,
    // audio: true,
  };

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        const newWindow = window.open(
          "",
          "Webcam Video",
          "width=640,height=480"
        );
        newWindow.document.write(
          '<video id="myVideo" controls autoplay muted></video>'
        );
        const video = newWindow.document.querySelector("#myVideo");
        if (stream) {
          video.srcObject = stream;
          video.play();
        video.setAttribute("autoplay", true);
        video.onloadedmetadata = function(ev){
            video.play();
        }
        } else {
          console.error("Stream is not available");
        }

        
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
