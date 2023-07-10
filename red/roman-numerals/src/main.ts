import {RomanNumeral} from "./RomanNumeral.js";

const submitButton = document.querySelector('.submit-btn') as HTMLButtonElement;
submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   const decimalValue = convertRomanToDecimal();
   displayDecimalValue(decimalValue);
});

function convertRomanToDecimal() {
    const inputElement = document.querySelector('.input-form') as HTMLInputElement;
    const inputValue = inputElement.value;
    const romanValue = new RomanNumeral(inputValue);
    return romanValue.romanToDecimal();
}

function displayDecimalValue(decimalValue: number) {
    const decimalOutput = document.querySelector('.decimal-output') as HTMLElement;
    if (Number.isNaN(decimalValue))
        decimalOutput.textContent = "Wait. That's illegal.";
    else
        decimalOutput.textContent = decimalValue.toString();
}
