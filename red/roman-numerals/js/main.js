import { RomanNumeral } from "./RomanNumeral.js";
const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const decimalValue = convertRomanToDecimal();
    displayDecimalValue(decimalValue);
});
function convertRomanToDecimal() {
    const inputElement = document.querySelector('.input-form');
    const inputValue = inputElement.value;
    const romanValue = new RomanNumeral(inputValue);
    return romanValue.romanToDecimal();
}
function displayDecimalValue(decimalValue) {
    const decimalOutput = document.querySelector('.decimal-output');
    if (Number.isNaN(decimalValue))
        decimalOutput.textContent = "Wait. That's illegal.";
    else
        decimalOutput.textContent = decimalValue.toString();
}
