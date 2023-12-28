const displayScreen = document.querySelector('#display-screen');
//append numbers, operators and decimal
function appendNumber(number) {
  displayScreen.textContent += number;
}
function appendOperator(operator) {
  displayScreen.textContent += operator;
}
function appendDecimal(decimal) {
  displayScreen.textContent += decimal;
 
}

function calculateResult() {
  result = calculateExpression(displayScreen.textContent);
  displayScreen.textContent = result;
}
//fuction to evaluate the expression 
function calculateResult() {
  const expression = displayScreen.textContent;

  try {
    // Use eval to calculate the result (replace with your own calculation logic)
    const result = eval(expression);

    // Check for division by 0
    if (result === Infinity) {
      alert("Error: Division by 0!");
      clearDisplay();
    } else {
      displayScreen.textContent = result;
    }
  } catch (error) {
    alert("Error: Invalid expression");
    clearDisplay();
  }
}

function clearDisplay() {
  displayScreen.textContent = '';
}
//toggle sign 
let signToggled = false;
function toggleSign() {
  signToggled = !signToggled;
  if (signToggled) {
    displayScreen.textContent = '-'+ displayScreen.textContent;
  } else {
    displayScreen.textContent = displayScreen.textContent.slice(1);
  }
}

//percentage calculation
function calculatePercentage() {
  displayScreen.textContent = parseFloat(displayScreen.textContent)/100;
}

document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase();

  if (key === 'enter') {
    document.getElementById('btn=').click();
  } else if (key === 'backspace') {
    // Handle backspace key (delete one character)
    event.preventDefault(); // Prevent the browser from navigating back
    const displayContent = document.getElementById('display-screen');
    const currentText = displayContent.textContent;
    displayContent.textContent = currentText.slice(0, -1);
  } else {
    const button = document.getElementById(`btn${key}`);
    if (button) {
      button.click(); // Simulate a click on the corresponding button
    }
  }
});



