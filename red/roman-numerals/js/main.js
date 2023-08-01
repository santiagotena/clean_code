import { RomanNumeral } from "./RomanNumeral.js";
const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = extractInput();
    const decimalValue = convertRomanToDecimal(inputValue);
    displayDecimalValue(decimalValue);
});
function extractInput() {
    const inputElement = document.querySelector('.input-form');
    return inputElement.value;
}
function convertRomanToDecimal(inputValue) {
    const romanValue = new RomanNumeral(inputValue);
    return romanValue.toDecimal();
}
function displayDecimalValue(decimalValue) {
    const decimalOutput = document.querySelector('.decimal-output');
    if (Number.isNaN(decimalValue))
        decimalOutput.textContent = "Wait. That's illegal.";
    else
        decimalOutput.textContent = decimalValue.toString();
}
// Tests //
// 1994 == MCMXCIV
// 2021 == MMXXI
// 3000 == MMM
// Error == J
