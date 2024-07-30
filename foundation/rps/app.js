function getComputerChoice(){
    const computerChoices = ["rock","paper","scissor"];
    const choiceIndex = Math.floor((Math.random()*computerChoices.length));
    let choice = computerChoices[choiceIndex]
    return choice;
};


