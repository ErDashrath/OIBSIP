function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let result = document.getElementById('result');

    if (isNaN(inputValue)) {
        result.textContent = 'Please enter a valid number';
        return;
    }

    let convertedValue;

    // Convert input value to Celsius first
    switch (inputUnit) {
        case 'Celsius':
            convertedValue = inputValue;
            break;
        case 'Fahrenheit':
            convertedValue = (inputValue - 32) * 5 / 9;
            break;
        case 'Kelvin':
            convertedValue = inputValue - 273.15;
            break;
    }

    // Convert from Celsius to the output unit
    switch (outputUnit) {
        case 'Celsius':
            // already in Celsius
            break;
        case 'Fahrenheit':
            convertedValue = (convertedValue * 9 / 5) + 32;
            break;
        case 'Kelvin':
            convertedValue = convertedValue + 273.15;
            break;
    }

    result.textContent = `${inputValue} ${inputUnit} is ${convertedValue.toFixed(2)} ${outputUnit}`;
}
