import {RomanNumeral} from "./RomanNumeral.js";

const submitButton = document.querySelector('.submit-btn') as HTMLButtonElement;
submitButton.addEventListener('click', (event : MouseEvent): void => {
   event.preventDefault();
   const inputValue : string = extractInput();
   const decimalValue : number = convertRomanToDecimal(inputValue);
   displayDecimalValue(decimalValue);
});

function extractInput(): string {
    const inputElement = document.querySelector('.input-form') as HTMLInputElement;
    return inputElement.value;
}

function convertRomanToDecimal(inputValue: string) : number {
    const romanValue : RomanNumeral = new RomanNumeral(inputValue);
    return romanValue.toDecimal();
}

function displayDecimalValue(decimalValue: number) : void {
    const decimalOutput = document.querySelector('.decimal-output') as HTMLElement;
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