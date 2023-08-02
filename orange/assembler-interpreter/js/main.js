export class AssemblerInterpreter {
    constructor(instructions) {
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
                this._copyToRegister(this._currentInstruction[1], +this._currentInstruction[2]);
            else if (this._currentInstruction[0] === "inc")
                this._increaseRegister(this._currentInstruction[1]);
            else if (this._currentInstruction[0] == "dec")
                this._decreaseRegister(this._currentInstruction[1]);
        };
        this._copyToRegister = (register, value) => {
            this._result[register] = value;
        };
        this._increaseRegister = (register) => {
            this._result[register]++;
        };
        this._decreaseRegister = (register) => {
            this._result[register]--;
        };
        this._instructions = instructions;
    }
}
// Main function
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a"]);
console.log(assemblerInstructions.execute());
module.exports = { AssemblerInterpreter };
