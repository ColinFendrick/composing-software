// Reduce/fold/accumulate iterates over list and returns one value

const basicAcc = arr => arr.reduce((acc, n) => acc + n, 0);
console.log(
	basicAcc([1,4,9,16])
);

// Write other fns as reduce calls
const map = (f, arr) => arr.reduce((acc, item, ix) => acc.concat(f(item, ix, arr)), []);
const filter = (f, arr) => arr.reduce((newArr, item) =>
	f(item) ? newArr.concat([item]) : newArr, []);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v, x));

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
