const output = document.querySelector("#output");
const OutputPlayScore = document.querySelector("#playScore");
const OutputComputerScore = document.querySelector("#computerScore");

const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

play();

function computerSelection() {
  //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  let moves = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * moves.length);
  let choice = moves[random];

  return choice;
}

function play() {
  buttons.forEach((button) =>
    button.addEventListener("click", (selection) => {
      if (selection.target.id == "startGameButton") return;
      const cpuSelection = computerSelection();
      game(selection.target.id, cpuSelection);
    })
  );
}

function game(playerSelection, computerSelection) {
  let round = "";

  if (playerSelection === computerSelection) {
    round = "draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    round = "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    round = `player`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    round = `computer`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    round = `player`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    round = `computer`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    round = `player`;
  }

  if (round === "player") {
    playerScore++;
    OutputPlayScore.textContent = playerScore;
    output.textContent = `Round goes to player, ${playerSelection} beats ${computerSelection}`;
  } else if (round === "computer") {
    computerScore++;
    OutputComputerScore.textContent = computerScore;
    output.textContent = `Round goes to computer, ${computerSelection} beats ${playerSelection}`;
  } else if (round === "draw") {
    computerScore++;
    OutputComputerScore.textContent = computerScore;
    playerScore++;
    OutputPlayScore.textContent = playerScore;
    output.textContent = `Draw both player chose ${playerSelection} and computer chose ${computerSelection} `;
  }

  if (playerScore === 5) {
    output.textContent = "You Win!!";
    alert(`You Win!! ${playerScore} - ${computerScore}`);
  } else if (computerScore === 5) {
    output.textContent = "You Loose!!";
    alert(`You Loose!! ${computerScore} - ${playerScore}`);
  }
}
