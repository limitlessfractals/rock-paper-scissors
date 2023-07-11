let playerScore = 0;
let computerScore = 0;
let roundResult = "";

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = "tied";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  // console.log(`Player: ${playerSelection} | Computer: ${computerSelection} | Result: ${result}`);
  return result;
}

function game() {
  playerScore = 0;
  computerScore = 0;
  roundResult = "";

  const buttons = document.querySelectorAll('.btn-block');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      const playerSelection = button.textContent.toLowerCase();
      roundResult = playRound(playerSelection);

      if (roundResult === "win") {
        playerScore += 1;
        console.log(`Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`);
      } else if (roundResult === "lose") {
        computerScore += 1;
        console.log(`Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`);
      } else {
        console.log(`Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`);
        return; // Use `return` instead of `continue` to exit the function
      }

      if (playerScore === 5 || computerScore === 5) {
        // Display final result
        if (playerScore > computerScore) {
          console.log("You won the game!");
        } else {
          console.log("Computer won the game!");
        }
        playerScore = 0;
        computerScore = 0;
      }
    });
  });
}

game();
