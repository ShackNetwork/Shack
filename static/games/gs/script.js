// Get a reference to the iframe and the full screen button
var iframe = document.getElementById("gameFrame");
var fullscreenButton = document.getElementById("fullscreen");

// Add an event listener for the full screen button
fullscreenButton.addEventListener("click", function () {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  }
});

// Add an event listener for the keydown event on the document
document.addEventListener("keydown", function (event) {
  // Check if the escape key was pressed
  if (event.keyCode === 27) {
    // Check if the iframe is in full screen mode
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
      // Cancel the default behavior of the escape key (leaving full screen mode)
      event.preventDefault();
    }
  }
});