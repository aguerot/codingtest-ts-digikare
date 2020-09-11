import { Rule } from '.';

export const zeroRule: Rule = {
    applies: input => input === 0,
    process: _ => `0`
};