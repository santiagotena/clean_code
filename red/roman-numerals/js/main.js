class RomanNumeral {
    constructor(romanNumeral) {
        this._romanValues = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        this.romanToDecimal = () => {
            this._decimal = 0;
            for (let i = 0; i < this._romanNumeral.length; i++) {
                this._validateCurrentValue(i);
                this._updateCurrentValue(i);
                this._updateNextValue(i);
                this._updateDecimal();
            }
            return this._decimal;
        };
        this._romanNumeral = romanNumeral;
    }
    _validateCurrentValue(i) {
        const currentSymbol = this._romanNumeral[i];
        const keys = Object.keys(this._romanValues);
        if (!keys.includes(currentSymbol))
            console.log("Wait. That is illegal.");
    }
    _updateCurrentValue(i) {
        const currentSymbol = this._romanNumeral[i];
        this._currentValue = this._romanValues[currentSymbol];
    }
    _updateNextValue(i) {
        const nextSymbol = this._romanNumeral[i + 1];
        this._nextValue = this._romanValues[nextSymbol];
    }
    _updateDecimal() {
        if (this._nextValue && this._currentValue < this._nextValue) {
            this._decimal -= this._currentValue;
        }
        else {
            this._decimal += this._currentValue;
        }
    }
}
const inputElement = document.getElementById('input-label');
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = inputElement.value;
    console.log(inputValue);
    const romanValue = new RomanNumeral(inputValue);
    const decimalValue = romanValue.romanToDecimal();
    // console.log(decimalValue);
});
// const romanValue = new RomanNumeral("MMXXI");
// const decimalValue : number = romanValue.romanToDecimal();
// console.log(decimalValue);
