// Variables
let firstNumber = null;  
let operator = null;
let secondNumber = '';

// DOM reference variables
let input = document.querySelector("input");
const buttons = Array.from(document.querySelectorAll(".btn"));
const operators = Array.from(document.querySelectorAll(".operators"));
const clear = document.querySelector('.clear');
let sumButton = document.querySelector('.sum');
let equal = document.querySelector(".equal");

// Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

operators.forEach(op => {
    op.addEventListener('click', handleOperatorClick);
});

equal.addEventListener('click', handleEqualClick);
clear.addEventListener('click', handleClearClick);
input.addEventListener('keydown', keyboardHandler);

sumButton.addEventListener('click', () => {
    let inputValue = input.value;
    let numberArray = inputValue.split('').map(Number);
    sum(numberArray);
});
