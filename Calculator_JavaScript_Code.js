let displayValue = '';

function show(value) {
    displayValue += value;
    updateDisplay();
}

function AC() {
    displayValue = '';
    updateDisplay();
}

function DEL() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);

        if (!Number.isFinite(result) || isNaN(result)) {
            throw new Error('Invalid input');
        }

        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('textt').value = displayValue;
}
