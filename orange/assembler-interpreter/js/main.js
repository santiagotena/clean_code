class AssemblerInterpreter {
    constructor(instructions) {
        this._currentInstructionIndex = 0;
        this._instructions = instructions;
    }
    executeInstructions() {
        return this._result;
    }
}
// Main function
const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
const interpreterOutput = assemblerInstructions.executeInstructions();
console.log(interpreterOutput);
// ["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]
