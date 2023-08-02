export class AssemblerInterpreter {
    constructor(instructions) {
        this._integerLimit = 99;
        this._result = {};
        this.execute = () => {
            this._instructionsIndex = 0;
            for (; this._instructionsIndex < this._instructions.length; this._instructionsIndex++) {
                this._splitInstruction(this._instructions[this._instructionsIndex]);
                this._assignInstruction();
            }
            return this._result;
        };
        this._splitInstruction = (instruction) => {
            this._currentInstruction = instruction.split(' ');
        };
        this._assignInstruction = () => {
            if (this._currentInstruction[0] === "mov")
                this._copyToRegister(this._currentInstruction[1], this._currentInstruction[2]);
            else if (this._currentInstruction[0] === "inc")
                this._increaseRegister(this._currentInstruction[1]);
            else if (this._currentInstruction[0] == "dec")
                this._decreaseRegister(this._currentInstruction[1]);
            else if (this._currentInstruction[0] == "jnz")
                this._jumpToInstruction(this._currentInstruction[1], this._currentInstruction[2]);
        };
        this._copyToRegister = (register, value) => {
            if (isNaN(value))
                this._result[register] = this._result[value];
            else
                this._result[register] = Number(value);
        };
        this._increaseRegister = (register) => {
            this._result[register]++;
        };
        this._decreaseRegister = (register) => {
            this._result[register]--;
        };
        this._jumpToInstruction = (register, steps) => {
            if (this._result[register] == 0 || this._result[register] == this._integerLimit || this._result[register] == -this._integerLimit)
                return;
            if (isNaN(steps))
                steps = Number(this._result[steps]);
            this._instructionsIndex += steps - 1;
            if (this._instructionsIndex >= this._instructions.length - 1 || this._instructionsIndex <= -2)
                throw new Error("Jump out of bounds");
        };
        this._instructions = instructions;
    }
}
// Main function
const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a"]);
console.log(assemblerInstructions.execute());
module.exports = { AssemblerInterpreter };
