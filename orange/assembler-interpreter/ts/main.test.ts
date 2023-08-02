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

it('jump forward by register', () => {
    const input = ["mov a 5", "mov b 2", "jnz a b", "inc a", "inc a"];
    const assemblerInstructions = new AssemblerInterpreter(input);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 6,
        'b' : 2
    });
});

it('jump back by register', () => {
    const input = ["mov a 5", "mov b -1", "inc a", "dec a", "dec a", "jnz a b", "inc a"];
    const assemblerInstructions = new AssemblerInterpreter(input);
    expect(assemblerInstructions.execute()).toEqual({
        'a' : 1,
        'b' : -1
    });
});

// test('jump forward - out of bounds', () => {
//     const input = ["mov a 5", "jnz a 3", "inc a", "inc a"];
//     const assemblerInstructions = new AssemblerInterpreter(input);
//     expect(assemblerInstructions.execute()).toThrow("Jump out of bounds");
// });

describe('out of bounds', () => {
    test('jump forward', () => {
        expect(() => {
            const input = ["mov a 5", "jnz a 3", "inc a", "inc a"];
            const assemblerInstructions = new AssemblerInterpreter(input);
            assemblerInstructions.execute()
        }).toThrow("Jump out of bounds");
    });

    test('jump backward', () => {
        expect(() => {
            const input = ["mov a 5", "inc a", "dec a", "dec a", "jnz a -5", "inc a"];
            const assemblerInstructions = new AssemblerInterpreter(input);
            assemblerInstructions.execute()
        }).toThrow("Jump out of bounds");
    });
});

// it.todo('escape infinite positive loops');
//
// it.todo('escape infinite negative loops')
//
// it.todo('multiple active registers 1');
//
// it.todo('multiple active registers 2');
