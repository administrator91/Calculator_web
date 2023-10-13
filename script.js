const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.number, .operator, .calculate, .clear');

let input = '';
let operator = '';
let currentValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'C') {
      input = '';
      operator = '';
      currentValue = '';
    } else if (value === '=') {
      if (currentValue !== '') {
        input = operate(input, operator, currentValue);
        operator = '';
        currentValue = '';
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (currentValue !== '') {
        input = operate(input, operator, currentValue);
        operator = value;
        currentValue = '';
      }
    } else {
      currentValue += value;
    }

    screen.textContent = currentValue || input || '0';
  });
});

function operate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case '*':
      return (a * b).toString();
    case '/':
      if (b === 0) return 'Error';
      return (a / b).toString();
    default:
      return b;
  }
}
