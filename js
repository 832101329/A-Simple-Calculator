let expression = '';
const resultInput = document.getElementById('result');

function appendExpression(value) {
    expression += value; // Appends the value of the button to the expression
    resultInput.value = expression; // Displays the expression in the input box
}

function calculateResult() {
    try {
        const result = eval(expression); // Evaluate the result of an expression using the eval function
        resultInput.value = result; // Show calculation result
        expression = ''; // Empty expression
    } catch (error) {
        resultInput.value = 'error'; // If the calculation is incorrect, an error message is displayed
    }
}

function clearResult() {
    expression = ''; // Empty expression another
    resultInput.value = expression; // Displays the expression in the input box
}

function deleteLastCharacter() {
    expression= expression.slice(0, -1); // Delete the last character
    resultInput.value = expression; // Displays the expression in the input box
}
