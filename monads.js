import { f as double } from './functions.js';

const x = 20;
const arr = [x]; // type lift
const res = arr.map(double);

const echo = n => x =>
	Array.from({ length: n }).fill(x);

console.log([1, 2, 3].map(echo(3)));

console.log([1, 2, 3].flatMap(echo(3)));
