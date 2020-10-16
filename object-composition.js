import { assign } from './functions.js';

const objs = [
	{ a:'a',b:'ab' },
	{ b:'b' },
	{ c:'c',b:'cb' }
];

const sum = (a, b) => a + b;
const total = [1, 2, 3].reduce(sum, 0);
console.log(total);

const composed = [{ a: 'a' }, { b: 'b' }].reduce(assign, {});
console.log(composed);
