import { sampleGenerator } from '../util/generator.ts';

const iterator = sampleGenerator();

// I decide when I'll get the next value
console.log(iterator.next().value);
