const video = document.querySelector('.video-container');
const playPauseSwitch = document.querySelector('.switch input[type="checkbox"]');

playPauseSwitch.addEventListener('change', () => {
  video.paused ? video.play() : video.pause();
  video.paused ? innertext = "Play" : innertext = "Pause";
  document.getElementById(".span").innerHTML = innertext

});