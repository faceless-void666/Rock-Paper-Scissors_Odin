let humanScore = 0;
let computerScore = 0;
let count = 0;



function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 10);
  if (randomChoice >= 0 && randomChoice <= 3) {
    return "rock";
  } else if (randomChoice >= 4 && randomChoice <= 7) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  let activeChoice = prompt("Enter a hand signal of choice (Rock, Paper or Scissors):", "");
  let humanInput;
  if (activeChoice === null || activeChoice === "") {
    console.log("You need to enter a value. Try again!");
  } else {
    humanInput = activeChoice.toLowerCase();
  }
   return humanInput; 
}


function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors"){
      console.log("You win! Rock beats Scissors.");
      humanScore++;
      count++;
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
      count++;
    } else {
      console.log("It's a tie! Play again.");
      count = count + 0;
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
      count++;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper.");
      computerScore++;
      count++;
    } else {
      console.log("It's a tie! Play again.");
      count = count + 0;
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beat Paper.");
      humanScore++;
      count++;
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
      count++;
    } else {
      console.log("It's a tie! Play again.");
      count = count + 0;
    }
  }
}

function playGame() {
  for(; count < 5;) {
    playRound();
  }
  if (humanScore >= 3 && computerScore <= 2) {
    console.log("Congrats! You're the winner.");
  } else {
    console.log("Oops... You lost. Better luck next time!");
  }
}




