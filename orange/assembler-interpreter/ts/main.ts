export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _instructionsIndex : number;
    private _currentInstruction: Array<string>;
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
            this._copyToRegister(this._currentInstruction[1], +this._currentInstruction[2]);
        else if (this._currentInstruction[0] === "inc")
            this._increaseRegister(this._currentInstruction[1]);
        else if (this._currentInstruction[0] == "dec")
            this._decreaseRegister(this._currentInstruction[1]);
    }

    private _copyToRegister = (register : string, value : number) : void => {
        this._result[register] = value;
    }

    private _increaseRegister = (register: string) : void => {
        this._result[register]++;
    }

    private _decreaseRegister = (register: string) : void => {
        this._result[register]--;
    }

}

// Main function
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a"]);
console.log(assemblerInstructions.execute());

module.exports = {AssemblerInterpreter};
