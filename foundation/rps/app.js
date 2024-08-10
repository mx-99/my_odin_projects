let body = document.querySelector("body");
let rock = document.createElement('button');
let paper = document.createElement('button');
let scissor = document.createElement('button');
let displayResult = document.createElement('div');
let currentScore = document.createElement('div');
let finalScore = document.createElement('div');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissor);
body.appendChild(displayResult);
body.appendChild(currentScore);
body.appendChild(finalScore);

let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoices = ["rock","paper","scissor"];
    const choiceIndex = Math.floor((Math.random()*computerChoices.length));
    let choice = computerChoices[choiceIndex]
    return choice;
};

function playGame(){
    function playRound(humanChoice, computerChoice) {
    //Rock beats scissors,  scissors beat paper, and paper beats rock.
        if(humanChoice === computerChoice){
            displayResult.textContent = "it's a tie";
        }else if(humanChoice == 'rock' && computerChoice == 'scissor' 
        || humanChoice == 'scissor' && computerChoice == 'paper'
        || humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++;
            displayResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
            currentScore.textContent = `Your score: = ${humanScore} Computer score ${computerScore}`
        }else{
            computerScore++;
            displayResult.textContent = `You lost!!! ${computerChoice} beats ${humanChoice}`
            currentScore.textContent = `Your score: = ${humanScore} Computer score ${computerScore}`
        }
        if(humanScore >= 5){
            alert(finalScore.textContent = `You Win the Game "You:" = ${humanScore} "Computer:" = ${computerScore}`)
            reset();
        }else if(computerScore >= 5) {
            alert(finalScore.textContent = `You Lost the Game "You:" = ${humanScore} "Computer:" = ${computerScore}`)
            reset();
        }
}
    function handleClick(choice){
        const computerSelection = getComputerChoice();
        playRound(choice,computerSelection)
    } 
    rock.addEventListener('click', ()=> handleClick('rock'))
    paper.addEventListener('click', ()=> handleClick('paper'))
    scissor.addEventListener('click', ()=> handleClick('scissor'))
};
playGame();

function reset(){
    humanScore = 0;
    computerScore = 0;
    displayResult.textContent = "";
    currentScore.textContent = "";
    finalScore.textContent = "";
}
