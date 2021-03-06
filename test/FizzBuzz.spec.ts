import { expect } from 'chai';
import { FizzBuzz } from '../src/FizzBuzz';
import { fizzbuzzSystem } from '../src/FizzBuzzSystem';

describe('FizzBuzz test', () => {
    let fb: FizzBuzz;

    beforeEach(() => {
        fb = fizzbuzzSystem;
    });

    it('Given number.NaN should say "NaN"', () => {
        expect(fb.say(Number.NaN)).to.equal('NaN');
    });

    it('Given undefined should say "undefined"', () => {
        expect(fb.say(undefined)).to.equal('undefined');
    });

    it('Given 0 should say "0"', () => {
        expect(fb.say(0)).to.equal('0');
    });

    it('Given 2 should say "2"', () => {
        expect(fb.say(2)).to.equal('2');
    });

    it('Given 3 should say "Fizz"', () => {
        expect(fb.say(3)).to.equal('Fizz');
    });

    it('Given 5 should say "Buzz"', () => {
        expect(fb.say(5)).to.equal('Buzz');
    });

    it('Given 15 should say "FizzBuzz"', () => {
        expect(fb.say(15)).to.equal('FizzBuzz');
    });

});
