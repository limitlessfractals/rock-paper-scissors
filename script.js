let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let gameResultTextElement;
let resultElement;

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

  return result;
}

function game() {
  const buttons = document.querySelectorAll('.btn-block');
  resultElement = document.querySelector('.result');
  gameResultTextElement = document.getElementById('game-result-text');
  const replayButton = document.getElementById('replay-button');
  
  resultElement.textContent = "";
  gameResultTextElement.textContent = "";
  replayButton.style.display = "none"; // Hide replay button initially

  const handleClick = function() {
    const playerSelection = this.textContent.toLowerCase();
    roundResult = playRound(playerSelection);

    if (roundResult === "win") {
      playerScore += 1;
      resultElement.textContent = `Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`;
    } else if (roundResult === "lose") {
      computerScore += 1;
      resultElement.textContent = `Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`;
    } else {
      resultElement.textContent = `Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`;
      return;
    }

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        gameResultTextElement.textContent = "You won the game!";
      } else {
        gameResultTextElement.textContent = "Computer won the game!";
      }
      replayButton.style.display = "block"; // Show replay button
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });

  replayButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    resultElement.textContent = "";
    gameResultTextElement.textContent = "";
    replayButton.style.display = "none";
    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });
  });
}

game();
