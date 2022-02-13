/*let myChoice = prompt('Choose rock paper or scissors') */
/*
function playRound(computerChoice) {
    let compNumb = Math.floor(Math.random() * 3);
    if (compNumb.value == 0) {
        return 'rock'
    } else if (compNumb == 1) {
        return 'scissors'
    } else {
    return 'paper';
} 
}
*/

const myChoice = 'rock'
console.log(computerChoice())
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * 3)];
} 


if (myChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win!');
    } else if (myChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win!');
    } else if (myChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose');
    } else if (myChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win!');
    } else if (myChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose');
    } else if (myChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose');
    } else {
        console.log('It\'s a tie try again');
    }   



