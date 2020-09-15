/**
 * Functor data types are things that can be mapped over.
 * Must be structure preserving.
 * So map must be: f([a, b, c]) -> [f(a) f(b) f(c)]
 * 
 * Formally:
 * 1. Identity: for all a in C, id(a) -> a
 * 2. Composition: for all f, g there exists h such that h:(f_g) 
 */

const a = [1, 4, 9, 16, 25];
// Identity:
const b = a.map(a => a);
console.log(b.toString() === a.toString()); // true

// Composition
const g = n => n + 9;
const f = n => n * 3;

const A = a.map(g).map(f);
const APrime = a.map(x => f(g(x)));


console.log(A, APrime, A.toString() === APrime.toString());
