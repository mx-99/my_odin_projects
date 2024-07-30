function getComputerChoice(){
    const computerChoices = ["rock","paper","scissor"];
    const choiceIndex = Math.floor((Math.random()*computerChoices.length));
    let choice = computerChoices[choiceIndex]
    return choice;
};

function getHumanChoice(){
    let humanChoice = prompt("Enter Rock, Paper or Scissor");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;

};

function playGame(){
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //Rock beats scissors,  scissors beat paper, and paper beats rock.
        if(humanChoice === computerChoice){
            console.log("it's a tie");
        }else if(humanChoice == 'rock' && computerChoice == 'scissor' 
        || humanChoice == 'scissor' && computerChoice == 'paper'
        || humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`); 
            console.log(`Your score: = ${humanScore} Computer score ${computerScore}`);
        }else{
            computerScore++;
            console.log(`You lost!!! ${computerChoice} beats ${humanChoice}`); 
            console.log(`Computer score: = ${computerScore} Your score ${humanScore}`);
        }
}
for(let i = 0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
};
};
playGame();
