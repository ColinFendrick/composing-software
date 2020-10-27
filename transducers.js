import { compose, isEven, f as double } from './functions.js';

// Applies a function to the values inside some context
// In this case, the context is the transucer pipeline
const map = f => step => (a, c) =>
	step(a, f(c));

// Rough implementation:
// The first element
const doubleMap = map(double);
const step = (a, c) => console.log(c);
doubleMap(step)(0, 21);
doubleMap(step)(3, 9);

// Filter takes a predicate function and only passes
// through the values that match the predicate.
// Otherwise, the returned reducer returns the accumulator
const filter = predicate => step => (a, c) =>
	predicate(c) ? step(a, c) : a;

// Both map and filter return reducers: step => (a, c) => ...
// So they can be composed
// This will also return a transducer, so we must apply a step fn
const doubleEvens = compose(
	filter(isEven), map(double)
);

// Applying a step function
// This results in a standard reducer which we can pass
// to any reduce API
const arrayConcat = (a, c) => a.concat([c]);
const xform = doubleEvens(arrayConcat);

// Now we can pass in the reducer here, using the Array.reduce API
const res = [1, 2, 3, 4, 5, 6].reduce(xform, []);

console.log(res);
