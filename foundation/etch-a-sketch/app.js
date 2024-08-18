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

const DEFAULT_GRID_X = 16;
const DEFAULT_GRID_Y = 16;

function createGrid(x,y){

    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            let div = document.createElement("div");
            div.classList.add("square");
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = randomColor();
            });
            container.appendChild(div);
        }
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
  
createGrid(DEFAULT_GRID_X, DEFAULT_GRID_Y);