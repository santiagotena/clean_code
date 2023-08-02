export class AssemblerInterpreter {
    private _instructions : Array<string>;
    private _currentInstructionIndex : number;
    private _result : Object = {};

    constructor(instructions : Array<string>) {
        this._instructions = instructions;
    }

    executeInstructions = () : Object => {
        this._currentInstructionIndex = 0;
        // for
        //     split array element
        //     direct action
        return this._result;
    }

    copyToRegister = (register : string, value : number) : Object => {
        this._result[register] = value;
        return this._result;
    }

    increaseRegister = (register: string) : Object => {
        this._result[register]++;
        return this._result;
    }

    

}

// Main function
const assemblerInstructions : AssemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const interpreterOutput : Object = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);

module.exports = {AssemblerInterpreter};
