const apply = ({ range, metric }) => (x1, x2) => range(x1) && range(x2) && metric(x1, x2);
const metricSpace = (range, metric) => ({ range, metric });

const realNumbers = n => typeof n === 'number';
const integers = n => Number.isInteger(n);
const coordinates = c => c.every(n => integers(n));

const realMetric = (x1, x2) => Math.abs(x2 - x1);
const cartesianMetric = ([x1, y1], [x2, y2]) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
const bunchedIntegerMetric = (x1, x2) => x1 % 2 !== 0 || x2 % 2 !== 0 ?
	(Math.abs(x2 - x1) / 2) + 1 :
	(Math.abs(x2 - x1) / 2);
const taxicabMetric = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

const real = metricSpace(realNumbers, realMetric);
const natural = metricSpace(integers, realMetric);
const evenCountingNatural = metricSpace(integers, bunchedIntegerMetric);
const cartesian = metricSpace(coordinates, cartesianMetric);
const lpSpace = metricSpace(coordinates, taxicabMetric);

console.log(
	// apply(real)(7, 4)
	// apply(natural)(1, 2)
	// apply(evenCountingNatural)(7, 1)
	// apply(cartesian)([1, 4], [0, 0])
	apply(lpSpace)([1, 4], [0, 0])
);
