import { pipe, log, g, f } from './functions.js';

const map = fn => mappable => mappable.map(fn);

const arr = [1, 2, 3, 4];

const isEven = n => n % 2 === 0;

const stripeAll = map(n => isEven(n) ? 'dark' : 'light');
const striped = stripeAll(arr);
log(striped);


const doubled = map(n => n * 2)(arr);
log(doubled);

// Data last - specializing params first, data fuction will act on last

let trace = label => value => {
	console.log(`${label}: ${value}`);
	return value;
};

// Each application of trace() to a label creates a sepcialized version of trace
// used in the pipeline

// since trace is written data-last, we can partially apply it
// and use that partial application
const traceAfterG = trace('after g'); 

log(
	pipe(
		g,
		traceAfterG,
		f,
		trace('after f')
	)(20)
);

// Compare with:
trace = value => label => {
	console.log(`${label}: ${value}`);
	return value;
};

log(
	pipe(
		g,
		x => trace(x)('after g'), // because trace is now data-first it cannot be partially applied
		f,
		x => trace(x)('after f')
	)(20)
);


