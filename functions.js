export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export const f = n => n * 2;
export const g = n => n + 1;
export const h = n => n - 4;
export const isEven = n => n % 2 === 0;

export const trace = label => value => {
	console.log(`${label}: ${value}`);
};
export const log = (...args) => console.log(...args);
export const curry = (
	f, arr = []
) => (...args) => (
	a => a.length === f.length ?
		f(...a) :
		curry(f, a)
)([...arr, ...args]);

export const composePromises = (...ms) =>
	ms.reduce((f, g) => x => g(x).then(f));

export const composeM = method => (...ms) =>
	ms.reduce((f, g) => x => g(x)[method](f));

export const assign = (a, b) => ({ ...a, ...b });
