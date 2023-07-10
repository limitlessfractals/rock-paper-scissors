

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    const computerSelection = getComputerChoice();

}