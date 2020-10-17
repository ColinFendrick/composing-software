import { f as double, g as inc, trace } from './functions.js';

const composeMap = method =>
	(...ms) => (ms.reduce((f, g) => x => g(x)[method](f)));

// The algebraic definition of function composition: // (f . g)(x) = f(g(x))
const compose = (f, g) => x => f(g(x));

trace('map composes')([
	[20].map(inc).map(double),
	[20].map(compose(double, inc)),
	[20].map(compose(inc, double)),
	[20].flatMap(compose(double, inc))
]);

/*
This is just a slight reformulation of the standard f(g(x)).Given any number of functions of type a - > Functor(b), iterate through each
function and apply each one to its input value, x.The.reduce() method takes a
function with two input values: An accumulator(f in this
  case), and the current item in the array(g).
*/
