export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _currentInstructionIndex : number;
    private _currentInstruction : Array<string>;
    private _integerLimit : number = 99;
    private _registers : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    execute = () : Object => {
        this._processInstructions();
        return this._registers;
    }

    private _processInstructions = () => {
        this._currentInstructionIndex = 0;
        for (; this._currentInstructionIndex < this._instructions.length; this._currentInstructionIndex++) {
            this._prepareCurrentInstruction(this._instructions[this._currentInstructionIndex]);
            this._assignCurrentInstruction();
        }
    }

    private _prepareCurrentInstruction = (instruction : string) => {
        this._currentInstruction = instruction.split(' ');
    }

    private _assignCurrentInstruction = () => {
        if (this._currentInstruction[0] === "mov")
            this._copyToRegister(this._currentInstruction[1], this._currentInstruction[2]);
        else if (this._currentInstruction[0] === "inc")
            this._increaseRegister(this._currentInstruction[1]);
        else if (this._currentInstruction[0] == "dec")
            this._decreaseRegister(this._currentInstruction[1]);
        else if (this._currentInstruction[0] == "jnz")
            this._jumpToInstruction(this._currentInstruction[1], this._currentInstruction[2]);
    }

    private _copyToRegister = (register : string, value) : void => {
        if (isNaN(value))
            this._registers[register] = this._registers[value];
        else
           this._registers[register] = Number(value);
    }

    private _increaseRegister = (register : string) : void => {
        this._registers[register]++;
    }

    private _decreaseRegister = (register : string) : void => {
        this._registers[register]--;
    }

    private _jumpToInstruction = (register : string, steps) : void => {
        if (this._isRegisterValueInvalid(register))
            return;
        this._shiftCurrentInstructionIndex(steps);
        this._assertNewIndexIsValid();
    }

    private _isRegisterValueInvalid = (register : string) : boolean => {
        return (this._isRegisterEqualToZero(register) || this._isRegisterOverLimit(register));
    }

    private _isRegisterEqualToZero = (register : string) : boolean => {
        return this._registers[register] == 0
    }

    private _isRegisterOverLimit = (register : string) : boolean => {
        return (this._registers[register] == this._integerLimit || this._registers[register] == -this._integerLimit)
    }

    private _shiftCurrentInstructionIndex = (steps) : void => {
        if (isNaN(steps))
            steps = this._registers[steps];
        this._currentInstructionIndex += steps - 1;
    }

    private _assertNewIndexIsValid = () : void => {
        if (this._currentInstructionIndex >= this._instructions.length - 1 || this._currentInstructionIndex <= -2)
            throw new Error("Jump out of bounds");
    }
}

// Main function
const assemblerInterpreter : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
console.log(assemblerInterpreter.execute());

module.exports = {AssemblerInterpreter};
