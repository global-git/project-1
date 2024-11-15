
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval to evaluate the mathematical expression
    } catch (e) {
        display.value = 'Error';
    }
}