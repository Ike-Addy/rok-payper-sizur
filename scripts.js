function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice
    if (randomNumber === 0) {
        computerChoice = 'rock';
        console.log(`The computer chose ${computerChoice}`);
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
        console.log(`The computer chose ${computerChoice}`);
    } else {
        computerChoice = 'scissor';
        console.log(`The computer chose ${computerChoice}`);
    }
    return computerChoice;
}

const getPlayerChoice = function () {
    let playerChoice = prompt('Rock, Paper, or Scissor?').toLowerCase();
    if (playerChoice == 'rock') {
        playerChoice = 'rock';
        console.log(`You chose ${playerChoice}`);
    } else if (playerChoice == 'paper') {
        playerChoice = 'paper';
        console.log(`You chose ${playerChoice}`);
    } else if (playerChoice == 'scissor'){
        playerChoice = 'scissor';
        console.log(`You chose ${playerChoice}`);
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissor');
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
   playerSelection = getPlayerChoice();
//    console.log(playerSelection);
   computerSelection = getComputerChoice();
//    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        console.log('its a tie!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('you win!');
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('you win!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('you win!');
    } else {
        console.log('you lose :(')
    }
}

playRound()
playRound()
playRound()
playRound()
playRound()