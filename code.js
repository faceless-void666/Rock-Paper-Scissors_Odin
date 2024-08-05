let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];
const roundResult = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const pcScore = document.getElementById("computerScore");

function getComputerChoice() {
  let i = Math.floor(Math.random() * options.length);
  return options[i];
}


function playRound(humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    switch (humanChoice) {
      case "paper":
        humanScore++;
        roundResult.textContent = "You win! Paper beats Rock";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "scissors":
        computerScore++;
        roundResult.textContent = "You lose! Rock beats Scissors";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "rock":
        roundResult.textContent = "It's a tie! Try again.";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
    } 
  } else if (computerChoice == "paper") {
    switch (humanChoice) {
      case "rock":
        computerScore++;
        roundResult.textContent = "You lose! Paper beats Rock";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "scissors":
        humanScore++;
        roundResult.textContent = "You win! Scissors beat Paper";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "paper":
        roundResult.textContent = "It's a tie! Try again.";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
    }
  } else if (computerChoice == "scissors") {
    switch (humanChoice) {
      case "paper":
        computerScore++;
        roundResult.textContent = "You lose! Scissors beat Paper";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "rock":
        humanScore++;
        roundResult.textContent = "You win! Rock beats Scissors";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
      case "scissors":
        roundResult.textContent = "It's a tie! Try again.";
        playerScore.textContent = `Player: ${humanScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;
        break;
    }
  }
  winnerCheck();
}


  function winnerCheck() {
    if (humanScore == 5) {
      alert("You won the game!!!");
      return;
    } else if (computerScore == 5) {
      alert("You really lost to a computer...?")
    }
  }


// UI STARTS HERE //



let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
  if (e.target.id == "rock") {
    playRound("rock", getComputerChoice());
  }
  else if (e.target.id == "paper") {
    playRound("paper", getComputerChoice());
  }
  else if (e.target.id == "scissors") {
    playRound("scissors", getComputerChoice());
  }
})
})




