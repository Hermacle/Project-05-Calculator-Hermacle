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