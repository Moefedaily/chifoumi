let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  playRound();
}

function playRound() {
  roundsPlayed++;

  const playerChoice = getPlayerChoice();

  if (playerChoice === null) {
    endGame();
    return;
  }

  const computerChoice = getComputerChoice();

  alert(`Computer chose: ${computerChoice}`);

  const result = findWinner(playerChoice, computerChoice);
  displayResult(result, playerChoice, computerChoice);

  displayScore();

  if (askToPlayAgain()) {
    playRound();
  } else {
    endGame();
  }
}

function getPlayerChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");

  if (choice === null) {
    return null;
  }

  choice = choice.toLowerCase().trim();

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice! Please enter rock, paper, or scissors:");

    if (choice === null) {
      return null;
    }

    choice = choice.toLowerCase().trim();
  }

  return choice;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "player";
  } else {
    computerScore++;
    return "computer";
  }
}

function displayResult(result, playerChoice, computerChoice) {
  if (result === "tie") {
    alert("It's a tie!");
  } else if (result === "player") {
    alert(`You win! ${playerChoice} beats ${computerChoice}.`);
  } else {
    alert(`Computer wins! ${computerChoice} beats ${playerChoice}.`);
  }
}

function displayScore() {
  alert(`Current Score:\nYou: ${playerScore}\nComputer: ${computerScore}`);
}

function askToPlayAgain() {
  const response = prompt("Do you want to play again? (yes/no)");

  if (response === null) {
    return false;
  }

  return response.toLowerCase() === "yes";
}

function endGame() {
  alert(
    `Game over after ${roundsPlayed} round(s).\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`
  );

  if (playerScore > computerScore) {
    alert("Congratulations! You won the game!");
  } else if (computerScore > playerScore) {
    alert("Computer won the game. Better luck next time!");
  } else {
    alert("The game ended in a tie!");
  }
}
