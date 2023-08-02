export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _currentInstruction: Array<string>;
    private _result : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    executeInstructions = () : Object => {
        for (let i = 0; i < this._instructions.length; i++) {
            this.splitInstruction(this._instructions[i]);
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

    copyToRegister = (register : string, value : number) : void => {
        this._result[register] = value;
    }

    increaseRegister = (register: string) : void => {
        this._result[register]++;
    }

    decreaseRegister = (register: string) : void => {
        this._result[register]--;
    }

}

// Main function
// const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a"]);
const interpreterOutput : Object = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);

module.exports = {AssemblerInterpreter};
