import { curry } from './functions.js'

const greaterEqual = cutoff => n => n >= cutoff;
const gte4 = greaterEqual(4);
console.log(gte4(2)); // false
console.log(greaterEqual(4)(2)); // false, 2 < 4, cutoff in first
console.log(greaterEqual(10)(11)); // true, 11 >= 10

const sum3 = curry((a, b, c) => a + b + c);
console.log(sum3(1, 2, 3)); // 6
console.log(sum3(1, 2)(3)); // 6
console.log(sum3(1)(2, 3)); // 6
console.log(sum3(1)(2)(3)); // 6
console.log(
	curry(
		(a, b, c) => a + b + c, [1, 2, 3]
	)()
); // 6
