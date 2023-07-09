const romanValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

class romanConversion {
    private _romanNumeral: string;
    private _currentValue: number;
    private _nextValue: number;
    private _result: number;

    constructor(_romanNumeral: string) {
        this._romanNumeral = _romanNumeral;
    }

    updateCurrentValue(i): void {
        const currentSymbol: string = this._romanNumeral[i];
        this._currentValue = romanValues[currentSymbol];
    }

    updateNextValue(i): void {
        const nextSymbol: string = this._romanNumeral[i + 1];
        this._nextValue = romanValues[nextSymbol];
    }

    updateResult(): void {
        if (this._nextValue && this._currentValue < this._nextValue) {
            this._result -= this._currentValue;
        } else {
            this._result += this._currentValue;
        }
    }

    romanToDecimal = (): number => {
        this._result = 0;
        for (let i = 0; i < this._romanNumeral.length; i++) {
            this.updateCurrentValue(i);
            this.updateNextValue(i);
            this.updateResult();
        }
        return this._result;
    }
}

const conversion = new romanConversion("MMXXI");
const decimalValue : number = conversion.romanToDecimal();
console.log(decimalValue);
