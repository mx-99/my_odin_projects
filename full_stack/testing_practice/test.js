const capitalize = require("./capitalize.js")
const reverseString = require("./reverseString")
const calculator = require('./calculator')
const analyzeArray = require('./analyzeArray')
const caesarCipher = require('./caesarCipher')

test("capitalize first letter", ()=>{
    expect(capitalize("alex")).toBe('A')
})

test("reverseString", ()=>{
    expect(reverseString("alex")).toBe('xela')
})

describe('calculator test', ()=>{
    test('1+1 equal 2', ()=>{
        expect(calculator.add(1,1)).toBe(2)
    });
    test('1-1 equals 0', ()=>{
        expect(calculator.sub(1,1)).toBe(0)

    });
    test('1*1 equal 1', ()=>{
        expect(calculator.mul(1,1)).toBe(1)
    });
    test('1/1 equal 0', ()=>{
        expect(calculator.div(1,1)).toBe(1)
    });
});

describe('Array analyz ', ()=>{
    test("statistics", ()=>{
        const result = analyzeArray(1,8,3,4,2,6);
        expect(result.average).toBe(4);
        expect(result.min).toBe(1);
        expect(result.max).toBe(8);
        expect(result.length).toBe(6);
    })
})

describe("caesarCipher function", () => {
    
    test("should shift letters correctly", () => {
        expect(caesarCipher('abc', 3)).toBe('def');
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test("should preserve lettercase", () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
        expect(caesarCipher('hello', 3)).toBe('khoor');
    });

    test("should not affect punctuation and spaces", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Hello World 123!', 5)).toBe('Mjqqt Btwqi 123!');
    });

    test("should return an empty string when input is empty", () => {
        expect(caesarCipher('', 3)).toBe('');
    });

    test("should handle negative shift values correctly", () => {
        expect(caesarCipher('abc', -3)).toBe('xyz');
        expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
    });

    test("should correctly wrap from z to a", () => {
        expect(caesarCipher('z', 1)).toBe('a');
        expect(caesarCipher('y', 2)).toBe('a');
    });
});