export class AssemblerInterpreter {
    constructor(instructions) {
        this._result = {};
        this.executeInstructions = () => {
            for (let i = 0; i < this._instructions.length; i++) {
                this.splitInstruction(this._instructions[i]);
                this.assignInstruction();
            }
            return this._result;
        };
        this.splitInstruction = (instruction) => {
            this._currentInstruction = instruction.split(' ');
        };
        this.assignInstruction = () => {
            if (this._currentInstruction[0] === "mov")
                this.copyToRegister(this._currentInstruction[1], +this._currentInstruction[2]);
            else if (this._currentInstruction[0] === "inc")
                this.increaseRegister(this._currentInstruction[1]);
            else if (this._currentInstruction[0] == "dec")
                this.decreaseRegister(this._currentInstruction[1]);
        };
        this.copyToRegister = (register, value) => {
            this._result[register] = value;
        };
        this.increaseRegister = (register) => {
            this._result[register]++;
        };
        this.decreaseRegister = (register) => {
            this._result[register]--;
        };
        this._instructions = instructions;
    }
}
// Main function
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a"]);
const interpreterOutput = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);
module.exports = { AssemblerInterpreter };
