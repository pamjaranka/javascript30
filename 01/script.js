window.onload = function() {

  function playButton( e ) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if( !audio ) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
  }

  function removeClass(e) {
    if( e.propertyName != 'transform' ) return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  // const keys = Array.from(document.querySelectorAll('.key'));
  // console.log(keys);
  // keys.forEach( key => key.addEventListener('transitionend', removeClass));
  keys.forEach( function( elem ) {
    elem.addEventListener('transitionend', removeClass);
  });

  window.addEventListener("keyup", playButton);
};