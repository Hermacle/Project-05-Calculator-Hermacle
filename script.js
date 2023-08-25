
// TODO: Faire la manipulation du DOM dans ce fichier

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const paragraph = document.querySelector('p');


let expression = ''; //current expression

// Function to add a number to the input

function addNumber(number) {
  // Check if the input is currently '0'
  if (input.value === '0') {
    // Replace '0' with the new number
    input.value = number;
    paragraph.textContent = number;
    expression = number;
  } else {
    // Add the new number to the existing input
    input.value += number;
    paragraph.textContent += number;
    expression += number;
  }
}

// Display result and calculate the current expression
function calculateResult() {
  input.value = eval(expression);
  if (eval(expression) == 'Infinity') {
    input.value = 'Erreur !';
  }
  paragraph.textContent = paragraph.textContent + ' = ';

}

// Function to calculate the percentage of the current expression
function calculatePercentage() {
  input.value = eval(expression) / 100;
}

// Reset result
function clearAll() {
  input.value = '';
  paragraph.textContent = '';
  expression = '';
}

// Delete the last character from the input
function clearLast() {
  input.value = input.value.slice(0, -1);
  paragraph.textContent = paragraph.textContent.slice(0, -1);
  expression = expression.slice(0, -1);
}

// Function to toggle the sign of the input
function changeSign() {
  paragraph.textContent = - paragraph.textContent;
  input.value = -input.value;
  expression = -expression;
}

// Function to add a decimal point to the input if necessary
function addDecimal() {
  if (input.value.includes('.') === false) {
    input.value += '.';
    paragraph.textContent += '.';
    expression += '.';
  }
}

// Disable input
input.disabled = true;

// Event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = button.textContent;

    // Add numbers to the input
    if (buttonValue >= 0 && buttonValue <= 9) {
      addNumber(buttonValue);
    } else {
      // Handle operators and other buttons

      // Check that the input is not empty
      if (input.value !== '') {
        const lastInput = paragraph.textContent.slice(-1);
        if (lastInput !== '+' && lastInput !== '-' && lastInput !== '*' && lastInput !== '/') {
          switch (buttonValue) {
            case '×':
              paragraph.textContent += ' ' + '×' + ' ';
              expression += ' ' + '*' + ' ';
              input.value = '';
              event.preventDefault();
              break;
            case '÷':
              paragraph.textContent += ' ' + '÷' + ' ';
              expression += ' ' + '/' + ' ';
              input.value = '';
              event.preventDefault();
              break;
            case '+':
              paragraph.textContent += ' ' + '+' + ' ';
              expression += ' ' + '+' + ' ';
              input.value = '';
              event.preventDefault();
              break;
            case '-':
              paragraph.textContent += ' ' + '-' + ' ';
              expression += ' ' + '-' + ' ';
              input.value = '';
              event.preventDefault();
              break;
            case '%':
              calculatePercentage();
              if (lastInput !== '%') {
                paragraph.textContent = paragraph.textContent + ' ' + '%';
              }
              event.preventDefault();
              break;
            case 'AC':
              clearAll();
              event.preventDefault();
              break;
            case 'C':
              clearLast();
              event.preventDefault();
              break;
            case '=':
              if (lastInput == '%') {
                calculatePercentage()
                event.preventDefault();
              } else {
                calculateResult();
                event.preventDefault();
              }

              break;
            case '+/-':
              changeSign();
              event.preventDefault();
              break;
            case '.':
              addDecimal();
              event.preventDefault();
              break;
          }
        } else {
          event.preventDefault();
        }
      }
    }
  });
});
