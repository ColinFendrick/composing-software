/**
 * Category is a collection of objects and arrows
 * Arrows are morphisms
 * Objects must have identity arrows
 * For A -> B -> C, there must exist A -> C
 * All morphisms are equivalent to compositions
 * Arrow composition is associate
 */

import { f, g } from './functions.js';

const trace = x => {
	console.log(x);
	return x;
};
const Identity = v => ({
	map: fn => Identity(fn(v))
});

const u = Identity(2);
const r1  = u;
const r2 = u.map(x => x);

r1.map(trace);
r2.map(trace);

const r3 = u.map(x => f(g(x)));
const r4 = u.map(g).map(f);
r3.map(trace);
r4.map(trace);