export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _instructionsIndex : number = 0;
    private _currentInstruction : Array<string>;
    private _integerLimit : number = 99;
    private _registers : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    execute = () : Object => {
        for (; this._instructionsIndex < this._instructions.length; this._instructionsIndex++) {
            this._prepareInstruction(this._instructions[this._instructionsIndex]);
            this._assignInstruction();
        }
        return this._registers;
    }

    private _prepareInstruction = (instruction : string) => {
        this._currentInstruction = instruction.split(' ');
    }

    private _assignInstruction = () => {
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
        this._shiftIndex(steps);
        this._assertNewIndexIsValid();
    }

    private _isRegisterValueInvalid = (register : string) : boolean => {
        return (this._registerEqualsZero(register) || this._registerPassesLimit(register));
    }

    private _registerEqualsZero = (register : string) : boolean => {
        return this._registers[register] == 0
    }

    private _registerPassesLimit = (register : string) : boolean => {
        return (this._registers[register] == this._integerLimit || this._registers[register] == -this._integerLimit)
    }

    private _shiftIndex = (steps) : void => {
        if (isNaN(steps))
            steps = this._registers[steps];
        this._instructionsIndex += steps - 1;
    }

    private _assertNewIndexIsValid = () : void => {
        if (this._instructionsIndex >= this._instructions.length - 1 || this._instructionsIndex <= -2)
            throw new Error("Jump out of bounds");
    }
}

// Main function
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
console.log(assemblerInstructions.execute());

module.exports = {AssemblerInterpreter};
