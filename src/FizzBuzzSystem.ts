import { FizzBuzz } from './FizzBuzz';
import { Rule, zeroRule, fizzbuzzRule, fizzRule, buzzRule, stringRule } from './rules';

export const fizzbuzzSystem: FizzBuzz = {
    say: input => {
        // rule order is important as find bellow takes first match
        const rules: Rule[] = [
            zeroRule,
            fizzbuzzRule,
            fizzRule,
            buzzRule,
            stringRule, // catch-all rule
        ];

        // find 1st applicable rule
        // always at least one rule applies thanks to catch-all stringRule
        const applicableRule = rules.find(r => r.applies(input));

        return applicableRule.process(input);
    }
};
