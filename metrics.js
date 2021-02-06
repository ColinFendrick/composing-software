const apply = ({ metric, range }) => (x1, x2) => range(x1) && range(x2) && metric(x1, x2);
const metricSpace = (range, metric) => ({ range, metric });

const realNumbers = x => typeof x === 'number';
const integers = x => Number.isInteger(x);
const realMetric = (x1, x2) => Math.abs(x2 - x1);
const bunchedIntegerMetric = (x1, x2) => x1 % 2 !== 0 || x2 % 2 !== 0 ?
	(Math.abs(x2 - x1) / 2) + 1 :
	(Math.abs(x2 - x1) / 2);

const real = metricSpace(realNumbers, realMetric);

const natural = metricSpace(integers, realMetric);

const evenCountingNatural = metricSpace(integers, bunchedIntegerMetric);

// const taxiCabMetric =


console.log(
	// apply(real)(7, 4)
	// apply(natural)(1, 2)
	apply(evenCountingNatural)(7, 1)
);
