game();

function computerSelection() {
  //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  let moves = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * moves.length);
  let choice = moves[random];

  return choice;
}

function playerSelection() {
  let choice = prompt("select your move [rock, paper or scissors]")
    .trim()
    .toLowerCase();

  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `player`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `computer`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `player`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `computer`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `player`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; playerScore < 6 || computerScore < 6; i++) {
    let round = playRound(playerSelection(), computerSelection());

    if (round === "player") {
      playerScore++;
      console.log(`Round goes to player`);
    } else if (round === "computer") {
      computerScore++;
      console.log(`Round goes to computer`);
    } else if (round === "draw") {
      computerScore++;
      playerScore++;
      console.log(`Draw`);
    }

    if (computerScore === 5 || playerScore === 5) {
      break;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You Win!! ${playerScore} - ${computerScore}`);
  } else {
    console.log(`You Loose!! ${computerScore} - ${playerScore}`);
  }
}
