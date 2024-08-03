document.addEventListener('DOMContentLoaded', function () {
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guessInput = document.getElementById('guess-input');
    var guessButton = document.getElementById('guess-button');
    var message = document.getElementById('message');

    guessButton.addEventListener('click', function () {
        var guess = parseInt(guessInput.value);

        if (guess < secretNumber) {
            message.textContent = 'Too low! Try again.';
        } else if (guess > secretNumber) {
            message.textContent = 'Too high! Try again.';
        } else {
            message.textContent = 'Congratulations! You guessed the number.';
        }
    });
});
