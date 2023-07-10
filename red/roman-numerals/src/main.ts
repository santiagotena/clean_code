class RomanNumeral {
    private _romanNumeral: string;
    private _currentValue: number;
    private _nextValue: number;
    private _decimal: number;
    private _romanValues: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    constructor(romanNumeral: string) {
        this._romanNumeral = romanNumeral;
    }

    romanToDecimal = (): number => {
        this._decimal = 0;
        for (let i = 0; i < this._romanNumeral.length; i++) {
            this._validateCurrentValue(i);
            this._updateCurrentValue(i);
            this._updateNextValue(i);
            this._updateDecimal();
        }
        return this._decimal;
    }

    private _validateCurrentValue(i: number): void {
        const currentSymbol: string = this._romanNumeral[i];
        const keys: string[] = Object.keys(this._romanValues);
        if (!keys.includes(currentSymbol))
            console.log("Wait. That is illegal.");
    }

    private _updateCurrentValue(i: number): void {
        const currentSymbol: string = this._romanNumeral[i];
        this._currentValue = this._romanValues[currentSymbol];
    }

    private _updateNextValue(i: number): void {
        const nextSymbol: string = this._romanNumeral[i + 1];
        this._nextValue = this._romanValues[nextSymbol];
    }

    private _updateDecimal(): void {
        if (this._nextValue && this._currentValue < this._nextValue) {
            this._decimal -= this._currentValue;
        } else {
            this._decimal += this._currentValue;
        }
    }
}

const inputElement = document.getElementById('input-label') as HTMLInputElement;
const submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   const inputValue = inputElement.value;
   console.log(inputValue);

    const romanValue = new RomanNumeral(inputValue);
    const decimalValue : number = romanValue.romanToDecimal();
    // console.log(decimalValue);





});


// const romanValue = new RomanNumeral("MMXXI");
// const decimalValue : number = romanValue.romanToDecimal();
// console.log(decimalValue);
