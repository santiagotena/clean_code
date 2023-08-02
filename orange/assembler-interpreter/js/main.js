export class AssemblerInterpreter {
    constructor(instructions) {
        this._result = {};
        this.executeInstructions = () => {
            this._currentInstructionIndex = 0;
            // for
            //     split array element
            //     direct action
            return this._result;
        };
        this.copyToRegister = (register, value) => {
            this._result[register] = value;
            return this._result;
        };
        this.increaseRegister = (register) => {
            this._result[register]++;
            return this._result;
        };
        this.decreaseRegister = (register) => {
            this._result[register]--;
            return this._result;
        };
        this._instructions = instructions;
    }
}
// Main function
const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const interpreterOutput = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);
module.exports = { AssemblerInterpreter };
