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


