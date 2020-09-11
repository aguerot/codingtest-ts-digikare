import { expect } from 'chai';
import { Rule, stringRule } from '../../src/rules';

describe('String rule test', () => {
    let rule: Rule;

    beforeEach(() => {
        rule = stringRule;
    });
    it(`Rule should return number as string`, () => {
        for (let index = 0; index <= 100; index++) {
            expect(rule.process(index)).to.be.equal(`${index}`);
        }
    });

    it(`Given any number should always apply`, () => {
        for (let index = 0; index <= 100; index++) {
            expect(rule.applies(index)).to.be.true;
        }
    });


});
