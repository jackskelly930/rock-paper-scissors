const myChoice = prompt('Please choose rock paper or scissors.')
console.log(computerChoice())

function computerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    cChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return cChoice
} 

if (myChoice == 'rock' && cChoice == 'scissors') {
        console.log('You win!');
    } else if (myChoice == 'scissors' && cChoice == 'paper') {
        console.log('You win!');
    } else if (myChoice == 'scissors' && cChoice == 'rock') {
        console.log('You lose');
    } else if (myChoice == 'paper' && cChoice == 'rock') {
        console.log('You win!');
    } else if (myChoice == 'rock' &&  cChoice == 'paper') {
        console.log('You lose');
    } else if (myChoice == 'paper' && cChoice == 'scissors') {
        console.log('You lose');
    } else {
        console.log('It\'s a tie try again');
    }   


