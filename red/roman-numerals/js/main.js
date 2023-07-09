const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
class romanConversion {
    constructor(_romanNumeral) {
        this.romanToDecimal = () => {
            this._result = 0;
            for (let i = 0; i < this._romanNumeral.length; i++) {
                this.updateCurrentValue(i);
                this.updateNextValue(i);
                this.updateResult();
            }
            return this._result;
        };
        this._romanNumeral = _romanNumeral;
    }
    updateCurrentValue(i) {
        const currentSymbol = this._romanNumeral[i];
        this._currentValue = romanValues[currentSymbol];
    }
    updateNextValue(i) {
        const nextSymbol = this._romanNumeral[i + 1];
        this._nextValue = romanValues[nextSymbol];
    }
    updateResult() {
        if (this._nextValue && this._currentValue < this._nextValue) {
            this._result -= this._currentValue;
        }
        else {
            this._result += this._currentValue;
        }
    }
}
const conversion = new romanConversion("MMXXI");
const decimalValue = conversion.romanToDecimal();
console.log(decimalValue);