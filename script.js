import { calculate } from './calculator.js';
// TODO: Faire la manipulation du DOM dans ce fichier

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const lastResult = document.querySelector('p');

// Function to add a number to the input
function addNumber(number) {
    input.value += number;
  }

// Function to add an operator to the input
function addOperator(operator) {
    input.value += operator;
  }

// Display result and calculate the current expression
function calculateResult() {
    lastResult.textContent = input.value ;
    input.value = eval(input.value);
  }
  
  
// Function to calculate the percentage of the current expression
function calculatePercentage() {
    input.value = eval(input.value) / 100;
  }

// Reset result
function clearAll() {
    input.value = '';
  }

// Delete the last character from the input
function clearLast() {
    input.value = input.value.slice(0, -1);
  }


// Function to toggle the sign of the input
function changeSign() {
    input.value = -input.value;
  }

// Function to add a decimal point to the input if necessary
function addDecimal() {
    if (input.value.includes('.') === false) {
      input.value += '.';
    }
  }