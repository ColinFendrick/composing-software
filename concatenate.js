import { objs } from './objs.js';

const concatenate = (a, o) => ({ ...a, ...o });

const c = objs.reduce(concatenate, {});

console.log(
	'concatenation', c,
	`enumerable keys: ${Object.keys(c)}`
);
