export const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
export const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

export const g = (n) => n + 1;
export const f = (n) => n * 2;
export const h = (n) => n - 4;

export const trace = (label) => (value) => {
	console.log(`${label}: ${value}`);
};
export const log = (...args) => console.log(...args);
