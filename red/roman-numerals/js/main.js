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
    constructor(romanNumeral) {
        this.romanToDecimal = () => {
            let result = 0;
            for (let i = 0; i < this.romanNumeral.length; i++) {
                const currentSymbol = this.romanNumeral[i];
                const currentValue = romanValues[currentSymbol];
                const nextSymbol = this.romanNumeral[i + 1];
                const nextValue = romanValues[nextSymbol];
                if (nextValue && currentValue < nextValue) {
                    result -= currentValue;
                }
                else {
                    result += currentValue;
                }
            }
            return result;
        };
        this.romanNumeral = romanNumeral;
    }
}
const romanNumeral = "MMXXI";
const conversion = new romanConversion(romanNumeral);
const decimalValue = conversion.romanToDecimal();
console.log(decimalValue);
