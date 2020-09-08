// A small handy function for checking where errors occur in stack
const trace = label => value => {
	console.log(`${label}: ${value}`);
};

const compose = (...fns) => x => fns.reduceRight((y, f) => x);
const g = n => n + 1;
const f = n => n*2;

const h = compose(
	trace('after f'),
	f,
	trace('after g'),
	g
);

h(20);
