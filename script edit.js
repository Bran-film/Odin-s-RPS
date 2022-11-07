// vars

// Scores and Round(moves)
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Button Inputs
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");

//Opponent Options
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ["rock", "paper", "scissors"];

// computerOption

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
  // console.log(computerChoice);
};

//Player Choice

const getPlayerChoice = () => {
  playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const rounds = document.querySelector(".rounds");
      round++;
      rounds.innerText = `Round: ${1 + round}`;

      // Function to check who wins
      winner(this.innerText, getComputerChoice());

      // Calling gameOver function after 10 moves
      if (round == 5) {
        gameOver(playerOptions, rounds);
      }
    });
  });
};

const winner = (player, computer) => {
  const result = document.querySelector(".result");
  const playerScoreBoard = document.querySelector(".p-count");
  const computerScoreBoard = document.querySelector(".c-count");
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (player === computer) {
    result.textContent = "Tie";
  } else if (player == "rock") {
    if (computer == "paper") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      result.textContent = "Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
};

const gameOver = (playerOptions, rounds) => {
  const chooseMove = document.querySelector(".move");
  const result = document.querySelector(".result");
  const reloadBtn = document.querySelector(".restart");

  playerOptions.forEach((option) => {
    option.style.display = "none";
  });

  chooseMove.innerText = "Game Over!!";
  rounds.style.display = "none";

  if (playerScore > computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Won The Game";
    result.style.color = "#308D46";
  } else if (playerScore < computerScore) {
    result.style.fontSize = "2rem";
    result.innerText = "You Lost The Game";
    result.style.color = "red";
  } else {
    result.style.fontSize = "2rem";
    result.innerText = "Tie";
    result.style.color = "grey";
  }
  reloadBtn.innerText = "Restart";
  reloadBtn.style.display = "flex";
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
};
