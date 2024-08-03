var score = 0;
var time = 10;
var timerId;

function startGame() {
  score = 0;
  time = 10;
  updateScore();
  updateTime();
  
  document.getElementById('gameButton').addEventListener('click', incrementScore);
  
  timerId = setInterval(countdown, 1000);
  setTimeout(endGame, time * 1000);
}

function incrementScore() {
  score++;
  updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = 'Score: ' + score;
}

function countdown() {
  time--;
  updateTime();
}

function updateTime() {
  document.getElementById('timer').textContent = 'Time: ' + time;
}

function endGame() {
  clearInterval(timerId);
  document.getElementById('gameButton').removeEventListener('click', incrementScore);
  alert('Game Over! Your final score is: ' + score);
}

startGame();
