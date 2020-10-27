import R from 'ramda';

import { f as double, g as increment, compose } from './functions.js';

const { lensProp, view, set, curry } = R;

const store = {
	a: 'foo',
	b: 'bar'
};
const lensProps = ['foo', 'bar', 1];

const lenses = lensProps.map(lensProp);

const truth = compose(...lenses);

const obj = {
	foo: { bar: [false, true]}
};

console.log(
	view(truth, obj)
);

/*
  OVER:
  It's possible to apply a function from a => b in the
  context of any functor data type. We've demonstrated
  functor mapping is composition. Similarly, we can
  apply a function to the value of focus in a lens.
  That value would usually be the same data type. This
  is commonly called over in libs.
*/

const over = (lens, f, store) => set(lens, f(view(lens, store)), store);

const uppercase = x => x.toUpperCase();

console.log(
	over(lensProp('a'), uppercase, store)
);

{
	const id = x => x;
	const lens = lensProp('a');
	const a = over(lens, id, store);
	const b = store;
	console.log(a, b);
}


const curryOver = curry(
	(lens, f, store) => set(lens, f(view(lens, store)), store)
);

{ //over(lens, f) after over (lens, g) is the same as
	// over(lens, compose(f, g))
	const lens = lensProp('a');

	const store = { a: 20 };

	const a = compose(
		curryOver(lens, double),
		curryOver(lens, increment)
	);

	const b = curryOver(lens, compose(double, increment));

	console.log(a(store), b(store));
}
