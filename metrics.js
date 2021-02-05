const apply = ({ metric, range }) => (x1, x2) => range(x1) && range(x2) && metric(x1, x2);

const real = {
	metric: (x1, x2) => Math.abs(x2 - x1),
	range: x => typeof x === 'number'
};

const natural = {
	metric: (x1, x2) => Math.abs(x2, x1),
	range: x => Number.isInteger(x)
};

const evenCountingNatural = {
	metric: (x1, x2) => x1 % 2 !== 0 || x2 % 2 !== 0
		? (Math.abs(x2 - x1) / 2) + 1
		: (Math.abs(x2 - x1) / 2),
	range: x => Number.isInteger(x)
};

console.log(
	// apply(real)(7, 4)
	// apply(natural)(1, 2)
	apply(evenCountingNatural)(7, 1)
);
