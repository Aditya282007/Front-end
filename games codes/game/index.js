let score = 0;
let timeLeft = 10;

const gameButton = document.getElementById('gameButton');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
        endGame();
    }
}

function incrementScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

function endGame() {
    gameButton.removeEventListener('click', incrementScore);
    gameButton.disabled = true;
    alert(`Game over! Your final score is ${score}.`);
}

// Start the game timer
const gameTimer = setInterval(updateTime, 1000);
