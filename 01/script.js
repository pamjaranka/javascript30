// Code goes here

// const
// audio.currentTime
window.addEventListener("keyup", playButton);

function playButton( e ) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  if( !audio ) return;
  audio.play();
}