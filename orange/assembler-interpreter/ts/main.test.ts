import {AssemblerInterpreter} from './main';

it('move integer', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 5
    });
});

it('move register', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "mov b a"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 5,
        'b' : 5
    });
});

it('move & increase', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 6
    });
});

it('move & decrease', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "dec a"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 4
    });
});

it('jump forward by integer', () => {
    const input = ["mov a 5", "jnz a 2", "inc a", "inc a"];
    const assemblerInstructions = new AssemblerInterpreter(input);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 6
    });
});

it('jump back by integer', () => {
    const input = ["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"];
    const assemblerInstructions = new AssemblerInterpreter(input);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 1
    });
});

it.todo('jump forward by register');

it.todo('jump back by register');

it.todo('jump forward - out of bounds');

it.todo('jump back - out of bounds');

it.todo('escape infinite positive loops');

it.todo('escape infinite negative loops')

it.todo('multiple registers');
