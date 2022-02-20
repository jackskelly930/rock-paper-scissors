let userScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    let myChoice = 'rock';
    playRound(myChoice, computerChoice())
    });

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        let myChoice = 'scissors';
        playRound(myChoice, computerChoice())
    });

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        let myChoice = 'paper';
        playRound(myChoice, computerChoice())
    });

function computerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    cChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return cChoice
};

const dub = document.querySelector('.results');
const uc = document.querySelector('.user-score');
const cc = document.querySelector('.computer-score');

function playRound(myChoice, cChoice) {
    if (myChoice == 'rock' && cChoice == 'scissors') {
        dub.textContent = 'You win! Rock smashes scissors!';
        userScore++;
        scoreKeeper();
        uc.textContent = userScore;
    } else if (myChoice == 'scissors' && cChoice == 'paper') {
        dub.textContent = 'You win! Scissors cuts up paper';
        userScore++;
        scoreKeeper();
        uc.textContent = userScore;
    } else if (myChoice == 'scissors' && cChoice == 'rock') {
        dub.textContent = 'You lose, sorry but scissors beats rock';
        computerScore++;
        scoreKeeper();
        cc.textContent = computerScore;
    } else if (myChoice == 'paper' && cChoice == 'rock') {
        dub.textContent = 'You win! Paper destroys rock';
        userScore++;
        scoreKeeper();
        uc.textContent = userScore;
    } else if (myChoice == 'rock' &&  cChoice == 'paper') {
        dub.textContent = 'You lose, paper beats rock';
        computerScore++;
        scoreKeeper();
        cc.textContent = computerScore;
    } else if (myChoice == 'paper' && cChoice == 'scissors') {
        dub.textContent = 'You lose, scissors beats paper';
        computerScore++;
        scoreKeeper();
        cc.textContent = computerScore;
    } else {
        dub.textContent = ' It\'s a tie, try again';
    }   
};

function scoreKeeper() {
    if (userScore == 5) {
        dub.textContent = 'YOU WIN! W\'s IN THE CHAT BOYS';
    } else if (computerScore == 5) {
        dub.textContent = 'You lost to the computer...maybe next time you will win';
    }
}