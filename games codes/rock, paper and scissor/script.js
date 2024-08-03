document.addEventListener('DOMContentLoaded', function () {
    var choices = document.getElementsByClassName('choice');
    var result = document.getElementById('result');

    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', function () {
            var playerChoice = this.getAttribute('data-choice');
            var computerChoice = getRandomChoice();
            var gameResult = playGame(playerChoice, computerChoice);

            result.textContent = "You chose: " + playerChoice + ", Computer chose: " + computerChoice + ". " + gameResult;
        });
    }

    function getRandomChoice() {
        var choices = ['rock', 'paper', 'scissors'];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playGame(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }

        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "You win!";
        }

        return "Computer wins!";
    }
});
