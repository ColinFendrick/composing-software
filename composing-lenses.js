import R from 'ramda';

const { compose, lensProp, view, set } = R;

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
	over(lensProp('a'), uppercase, { a: 'foo', b: 'bar' })
);
