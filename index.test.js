const fizzBuzz = require('./index')

describe('fizzBuzz', () => {
    it('fizz for multiple 3, buzz for 5, fizzBuzz for both', () => {
        expect(fizzBuzz(5)).toBe('buzz');
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(9)).toBe('fizz');
    })
    it('returns the num if not multiple of 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(4)).toBe(4)
        expect(fizzBuzz(121)).toBe(121)
    })
})
