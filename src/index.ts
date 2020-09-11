import { fizzbuzzSystem } from './FizzBuzzSystem';


const results = Array.from({ length: 101 })
                    .map((_, index) => (`${index} => ${fizzbuzzSystem.say(index)}`));

console.log(results.join('\n'));
