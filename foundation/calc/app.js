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

// Math functions
const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);

function divide(a, b) {
    if (Number(b) === 0) return "Error"; 
    return Number(a) / Number(b);
}

const sum = function(array) {
    let summed = array.reduce((total, current) => total + current, 0);
    updateDisplay(summed); 
    return summed;
};

function operate(op, number1, number2) {
    if (op === '+') return add(number1, number2);
    if (op === '-') return subtract(number1, number2);
    if (op === '*') return multiply(number1, number2);
    if (op === '/') return divide(number1, number2);
    return null;  
}

function handleButtonClick(event) { 
    let clickedButton = event.currentTarget;
    secondNumber += clickedButton.value;
    updateDisplay(secondNumber);
}

function handleOperatorClick(event) {
    const clickedOp = event.currentTarget;
    let opValue = clickedOp.value;  

    if (operator !== null && secondNumber !== '') {
        firstNumber = operate(operator, firstNumber, secondNumber);
        updateDisplay(firstNumber);
        secondNumber = '';
    }

    operator = opValue;     
    firstNumber = Number(input.value);
    secondNumber = '';
}

function handleEqualClick() {
    if (operator === undefined || secondNumber === '') return;
    if (operator !== null && secondNumber !== '') {
        let result = operate(operator, firstNumber, secondNumber);
        updateDisplay(result);
        firstNumber = result;
        secondNumber = '';
        operator = null;
    }
}

function handleClearClick() {
    input.value = '';
    firstNumber = null;
    operator = null;
    secondNumber = '';
}

const updateDisplay = value => {
    input.value = typeof value === 'number' ? Number(value.toFixed(10)) : value;
};
