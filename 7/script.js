document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById("playerName");
    const startButton = document.getElementById("startButton");
    const playerNameDisplay = document.getElementById("playerNameDisplay");
    const guessGame = document.getElementById("guessGame");
    const userGuessInput = document.getElementById("userGuess");
    const guessButton = document.getElementById("guessButton");
    const messageDisplay = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");
    const gameOver = document.getElementById("gameOver");
    const playerNameResult = document.getElementById("playerNameResult");
    const attemptsResult = document.getElementById("attemptsResult");
    const playAgainButton = document.getElementById("playAgainButton");

    let playerName = "";
    let targetNumber = 0;
    let attempts = 20;

    function startNewGame() {
        playerName = playerNameInput.value;
        playerNameDisplay.textContent = playerName;
        guessGame.classList.remove("hidden");
        startButton.disabled = true;
        playerNameInput.disabled = true;
        generateTargetNumber();
    }

    function generateTargetNumber() {
        targetNumber = Math.floor(Math.random() * 101);
    }

    function checkGuess() {
        const userGuess = parseInt(userGuessInput.value);

        if (userGuess === targetNumber) {
            endGame(true);
        } else {
            attempts--;
            attemptsDisplay.textContent = attempts;

            if (attempts === 0) {
                endGame(false);
            } else {
                messageDisplay.textContent =
                    userGuess < targetNumber
                        ? "Tente um número maior."
                        : "Tente um número menor.";
                userGuessInput.value = "";
            }
        }
    }

    function endGame(isWinner) {
        guessGame.classList.add("hidden");
        gameOver.classList.remove("hidden");

        if (isWinner) {
            playerNameResult.textContent = playerName;
            attemptsResult.textContent = 20 - attempts;
        }
    }

    startButton.addEventListener("click", startNewGame);
    guessButton.addEventListener("click", checkGuess);
    playAgainButton.addEventListener("click", () => {
        location.reload();
    });
});
