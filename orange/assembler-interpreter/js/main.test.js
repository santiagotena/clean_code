import { AssemblerInterpreter } from './main';
describe('move instruction', () => {
    it('moves with integer', () => {
        const assemblerInterpreter = new AssemblerInterpreter(["mov a 5"]);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 5
        });
    });
    it('moves with register', () => {
        const assemblerInterpreter = new AssemblerInterpreter(["mov a 5", "mov b a"]);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 5,
            'b': 5
        });
    });
});
describe('increase and decrease instructions', () => {
    it('moves & increases', () => {
        const assemblerInterpreter = new AssemblerInterpreter(["mov a 5", "inc a"]);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 6
        });
    });
    it('moves & decreases', () => {
        const assemblerInterpreter = new AssemblerInterpreter(["mov a 5", "dec a"]);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 4
        });
    });
});
describe('jump instructions', () => {
    it('jumps forward by integer', () => {
        const input = ["mov a 5", "jnz a 2", "dec a", "inc a"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 6
        });
    });
    it('jumps back by integer', () => {
        const input = ["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 1
        });
    });
    it('jumps forward by register', () => {
        const input = ["mov a 5", "mov b 2", "jnz a b", "inc a", "inc a"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 6,
            'b': 2
        });
    });
    it('jumps back by register', () => {
        const input = ["mov a 5", "mov b -1", "inc a", "dec a", "dec a", "jnz a b", "inc a"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 1,
            'b': -1
        });
    });
});
describe('out of bounds checks', () => {
    test('jump forward', () => {
        expect(() => {
            const input = ["mov a 5", "jnz a 3", "inc a", "inc a"];
            const assemblerInterpreter = new AssemblerInterpreter(input);
            assemblerInterpreter.execute();
        }).toThrow("Jump out of bounds");
    });
    test('jump backward', () => {
        expect(() => {
            const input = ["mov a 5", "inc a", "dec a", "dec a", "jnz a -5", "inc a"];
            const assemblerInterpreter = new AssemblerInterpreter(input);
            assemblerInterpreter.execute();
        }).toThrow("Jump out of bounds");
    });
});
describe('multiple active registers', () => {
    test('test 1', () => {
        const input = ["mov a 5", "dec a", "mov c 41", "dec a", "inc c", "mov b 25"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'c': 42,
            'a': 3,
            'b': 25,
        });
    });
    test('test 2', () => {
        const input = ["mov a 5", "mov b 9", "dec a", "dec a", "jnz a -1", "inc a", "inc b"];
        const assemblerInterpreter = new AssemblerInterpreter(input);
        expect(assemblerInterpreter.execute()).toEqual({
            'a': 1,
            'b': 10
        });
    });
});
