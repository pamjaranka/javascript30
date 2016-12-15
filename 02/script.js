window.onload = function() {
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function setTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hour * 360 / 12) + 90;
    const minutesDeg = (minutes * 360 / 60) + 90;
    const secondsDeg = (seconds * 360 / 60) + 90;

    setTransform( hourHand, hourDeg );
    setTransform( minHand, minutesDeg );
    setTransform( secondHand, secondsDeg );
  }
  function setTransform( el, deg ) {
    el.style.transform = `rotate(${deg}deg)`;
  }
  setInterval( setTime, 1000 );
};