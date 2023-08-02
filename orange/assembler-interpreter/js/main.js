export class AssemblerInterpreter {
    constructor(instructions) {
        this._instructionsIndex = 0;
        this._integerLimit = 99;
        this._registers = {};
        this.execute = () => {
            this._processInstructions();
            return this._registers;
        };
        this._processInstructions = () => {
            for (; this._instructionsIndex < this._instructions.length; this._instructionsIndex++) {
                this._prepareInstruction(this._instructions[this._instructionsIndex]);
                this._assignInstruction();
            }
        };
        this._prepareInstruction = (instruction) => {
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
                this._registers[register] = this._registers[value];
            else
                this._registers[register] = Number(value);
        };
        this._increaseRegister = (register) => {
            this._registers[register]++;
        };
        this._decreaseRegister = (register) => {
            this._registers[register]--;
        };
        this._jumpToInstruction = (register, steps) => {
            if (this._isRegisterValueInvalid(register))
                return;
            this._shiftInstructionsIndex(steps);
            this._assertNewIndexIsValid();
        };
        this._isRegisterValueInvalid = (register) => {
            return (this._registerEqualsZero(register) || this._registerPassesLimit(register));
        };
        this._registerEqualsZero = (register) => {
            return this._registers[register] == 0;
        };
        this._registerPassesLimit = (register) => {
            return (this._registers[register] == this._integerLimit || this._registers[register] == -this._integerLimit);
        };
        this._shiftInstructionsIndex = (steps) => {
            if (isNaN(steps))
                steps = this._registers[steps];
            this._instructionsIndex += steps - 1;
        };
        this._assertNewIndexIsValid = () => {
            if (this._instructionsIndex >= this._instructions.length - 1 || this._instructionsIndex <= -2)
                throw new Error("Jump out of bounds");
        };
        this._instructions = instructions;
    }
}
// Main function
const assemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
console.log(assemblerInterpreter.execute());
module.exports = { AssemblerInterpreter };
