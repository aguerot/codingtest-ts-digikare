import { expect } from 'chai';
import { Rule, fizzbuzzRule } from '../../src/rules';

describe('FizzBuzz rule test', () => {
    let rule: Rule;
    const pivot = 3 * 5;

    beforeEach(() => {
        rule = fizzbuzzRule;
    });

    it(`Rule should say FizzBuzz`, () => {
        expect(rule.process()).to.equal('FizzBuzz');
    });

    it(`Given ${pivot - 1} should not apply`, () => {
        expect(rule.applies(pivot - 1)).to.be.false;
    });

    it(`Given ${pivot} should apply`, () => {
        expect(rule.applies(pivot)).to.be.true;
    });

    it(`Given ${2*pivot} should apply`, () => {
        expect(rule.applies(2*pivot)).to.be.true;
    });

});
