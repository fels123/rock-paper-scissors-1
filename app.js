// Selecting elements from the DOM
const cards = document.querySelectorAll(".card");
const playerWinDisplay = document.getElementById("player-winCount");
const computerWinDisplay = document.getElementById("computer-winCount");
const result = document.getElementById("result");
const newGameButton = document.getElementById("newGame");

let playerWinCount = 0;
let computerWinCount = 0;

// Add click event listeners to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const playerSelection = card.id;
    playRound(playerSelection);
  });
});

// Function to play a round of rock-paper-scissors
function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let roundResult;

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "You win!";
    playerWinCount++;
  } else {
    roundResult = "Computer wins!";
    computerWinCount++;
  }

  updateScore();
  displayResult(playerSelection, computerSelection, roundResult);
}

// Function to update the score display
function updateScore() {
  playerWinDisplay.textContent = playerWinCount;
  computerWinDisplay.textContent = computerWinCount;
}

// Function to display the result of each round
function displayResult(playerSelection, computerSelection, roundResult) {
  result.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${roundResult}`;
}

// Event listener for the "New Game" button
newGameButton.addEventListener("click", () => {
  playerWinCount = 0;
  computerWinCount = 0;
  updateScore();
  result.textContent = "";
});
