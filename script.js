let currentNumber = '';
let operator = '';
let result = 0;

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('result').value = currentNumber;
}

function appendDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    document.getElementById('result').value = currentNumber;
  }
}

function performOperation(op) {
  operator = op;
  result = parseFloat(currentNumber);
  currentNumber = '';
}

function calculate() {
  if (currentNumber !== '') {
    const number = parseFloat(currentNumber);
    switch (operator) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        result /= number;
        break;
    }
    document.getElementById('result').value = result;
    currentNumber = '';
  }
}

function clearCalculator() {
  currentNumber = '';
  operator = '';
  result = 0;
  document.getElementById('result').value = '';
}
