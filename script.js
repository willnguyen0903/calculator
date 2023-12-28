const displayScreen = document.querySelector('#display-screen');
const resultScreen = document.querySelector('#result-screen');
//append numbers, operators and decimal
function appendNumber(number) {
  displayScreen.textContent += number;
}
function appendOperator(operator) {
  if(result) {
    displayScreen.textContent = result + operator;
  } else {
  displayScreen.textContent += operator; 
  }
}
function appendDecimal(decimal) {
  displayScreen.textContent += decimal;
}
let result = null;
function calculateResult() {
  result = calculateExpression(displayScreen.textContent);
  resultScreen.textContent = result;
}
//fuction to evaluate the expression 
function calculateExpression(expression) {
  // Validate the expression to ensure it contains only allowed characters
  const validCharsRegex = /^[0-9+\-*/(). ]*$/;
  if (!validCharsRegex.test(expression)) {
      throw new Error('Invalid characters in expression');
  }

  // Use try-catch to handle potential errors during evaluation
  try {
      // Use the Function constructor to create a function and pass the expression as an argument
      const evalFunction = new Function('return ' + expression);

      // Call the function to evaluate the expression
      const result = evalFunction();
      // Check for NaN or Infinity results
      if (!isFinite(result)) {
          alert('Invalid result!');
          throw new Error('Invalid result');
      }

      return result;
  } catch (error) {
      alert('Invalid expression!');
      clearDisplay();
      throw new Error('Error evaluating expression: ' + error.message);
  }
}

function clearDisplay() {
  displayScreen.textContent = '';
  resultScreen.textContent = '0';
  result = null;
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
  resultScreen.textContent = parseFloat(calculateExpression
                              (displayScreen.textContent)/100);
  displayScreen.textContent = resultScreen.textContent;                              
}
//eventlistener for keyboard inputs
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
  } else if (key === '*') {
    document.getElementById('btnx').click();
  } else {
    const button = document.getElementById(`btn${key}`);
    if (button) {
      button.click(); // Simulate a click on the corresponding button
    }
  }
});

//after a calculation is made, 
//another input will assign the previous result to the display screen



