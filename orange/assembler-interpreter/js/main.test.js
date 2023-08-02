import { AssemblerInterpreter } from './main';
it('test jest', () => {
    expect(2).toBe(2);
});
it('test jest 2', () => {
    const a = 5;
    const b = 10;
    expect(a + b).toBe(15);
});
it('move', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a': 5
    });
});
it('move & increase', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "inc a"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a': 6
    });
});
it('move & decrease', () => {
    const assemblerInstructions = new AssemblerInterpreter(["mov a 5", "dec a"]);
    expect(assemblerInstructions.execute()).toEqual({
        'a': 4
    });
});
it.todo('jump forward by integer');
it.todo('jump back by integer');
it.todo('jump forward by register');
it.todo('jump back by register');
it.todo('jump forward - out of bounds');
it.todo('jump back - out of bounds');
it.todo('multiple registers');
