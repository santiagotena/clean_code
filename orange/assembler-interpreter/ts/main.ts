export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _instructionsIndex : number;
    private _currentInstruction : Array<string>;
    private _integerLimit : number = 99;
    private _result : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    execute = () : Object => {
        this._instructionsIndex = 0;
        for (; this._instructionsIndex < this._instructions.length; this._instructionsIndex++) {
            this._splitInstruction(this._instructions[this._instructionsIndex]);
            this._assignInstruction();
        }
        return this._result;
    }

    private _splitInstruction = (instruction : string) => {
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
            this._result[register] = this._result[value];
        else
           this._result[register] = Number(value);
    }

    private _increaseRegister = (register : string) : void => {
        this._result[register]++;
    }

    private _decreaseRegister = (register : string) : void => {
        this._result[register]--;
    }

    private _jumpToInstruction = (register : string, steps) : void => {
        if (this._result[register] == 0 || this._result[register] == this._integerLimit || this._result[register] == -this._integerLimit)
            return;

        if (isNaN(steps))
            steps = Number(this._result[steps]);

        this._instructionsIndex += steps - 1;

        //

    }

}

// Main function
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a"]);
console.log(assemblerInstructions.execute());

module.exports = {AssemblerInterpreter};
