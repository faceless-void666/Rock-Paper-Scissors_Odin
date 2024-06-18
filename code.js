let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  let randomChoice = Math.floor(Math.random() * 10);
  if (randomChoice >= 0 && randomChoice <= 3) {
    return rock;
  } else if (randomChoice >= 4 && randomChoice <= 7) {
    return paper;
  } else {
    return scissors;
  }
}


function getHumanChoice() {
  let activeChoice = prompt("Enter a hand signal of choice (Rock, Paper or Scissors):");
  return activeChoice;
}


function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors"){
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else {
      console.log("It's a tie! Play again.");
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper.");
      computerScore++;
    } else {
      console.log("It's a tie! Play again.");
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beat Paper.");
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    } else {
      console.log("It's a tie! Play again.");
    }
  }
}

function playGame() {
  let count;
  for(count = 0; count < 5; count++) {
    playRound();
  }
  if (humanScore >= 3) {
    console.log("Congrats! You're the winner.");
  } else {
    console.log("Oops... You lost. Better luck next time!");
  }
}



