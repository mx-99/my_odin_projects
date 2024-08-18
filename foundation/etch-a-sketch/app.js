let container = document.querySelector("#container");
let userChoice = document.querySelector("#userChoice");

let addGridButton = document.createElement("button");
addGridButton.classList.add("inputArea");
addGridButton.textContent = "Add grid";
userChoice.appendChild(addGridButton);

let resetButton =  document.createElement("button");
resetButton.classList.add("inputArea");
resetButton.textContent = "reset Button";
userChoice.appendChild(resetButton);

