let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let gameResultTextElement;
let resultElement;
let replayButton;
let buttons;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
  
    if (playerSelection === computerSelection) {
      roundResult = "tied";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      roundResult = "win";
    } else {
      roundResult = "lose";
    }
    return roundResult;
}  

function handleClick() {
  const playerSelection = this.textContent.toLowerCase();
  playRound(playerSelection);

  if (roundResult === "win") {
    playerScore += 1;
    console.log(roundResult);
    resultElement.textContent = `Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (roundResult === "lose") {
    computerScore += 1;
    console.log(roundResult);
    resultElement.textContent = `Result: You ${roundResult}! | Player: ${playerScore} | Computer: ${computerScore}`;
  } else {
    console.log(roundResult);
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
}

function game() {
  buttons = document.querySelectorAll('.btn-block');
  resultElement = document.querySelector('.result');
  gameResultTextElement = document.getElementById('game-result-text');
  replayButton = document.getElementById('replay-button');
  
  replayButton.style.display = "none"; // Hide replay button initially

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
