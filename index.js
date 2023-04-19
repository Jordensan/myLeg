var audio = new Audio('sound.mp3');
var button = document.getElementById('inside');

button.addEventListener('click', function(event) {
  // Check if the click event occurred on the button element
  if (event.target === button) {
    audio.play();
  }
});
