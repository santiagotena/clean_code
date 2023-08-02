export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _currentInstructionIndex : number;
    private _currentInstruction: Array<string>;
    private _result : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    executeInstructions = () : Object => {
        this._currentInstructionIndex = 0;
        for (let i = 0; i < this._instructions.length; i++) {
            this.splitInstruction(this._instructions[this._currentInstructionIndex]);
            this.assignInstruction();
        }
        return this._result;
    }

    splitInstruction = (instruction : string) => {
        this._currentInstruction = instruction.split(' ');
    }

    assignInstruction = () => {
        if (this._currentInstruction[0] === "mov")
            this.copyToRegister(this._currentInstruction[1], +this._currentInstruction[2]);
        else if (this._currentInstruction[0] === "inc")
            this.increaseRegister(this._currentInstruction[1]);
        else if (this._currentInstruction[0] == "dec")
            this.decreaseRegister(this._currentInstruction[1]);
    }

    copyToRegister = (register : string, value : number) : Object => {
        this._result[register] = value;
        return this._result;
    }

    increaseRegister = (register: string) : Object => {
        this._result[register]++;
        return this._result;
    }

    decreaseRegister = (register: string) : Object => {
        this._result[register]--;
        return this._result;
    }

}

// Main function
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const interpreterOutput : Object = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);

module.exports = {AssemblerInterpreter};
