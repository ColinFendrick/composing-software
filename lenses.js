import isEqual from 'lodash/isEqual.js';

const view = (lens, store) => lens.view(store);
const set = (lens, value, store) => lens.set(value, store);

const createLens = prop => ({
	view: store => store[prop],
	set: (value, store) => ({
		...store,
		[prop]: value
	})
});

const fooStore = {
	a: 'foo', b: 'bar'
};

const [aLens, bLens] = [createLens('a'), createLens('b')];

const [a, b] = [view(aLens, fooStore), view(bLens, fooStore)];

console.log(a, b);

const bazStore = set(aLens, 'baz', fooStore);
console.log(view(aLens, bazStore));

// Proving laws:
const store = fooStore;

// `view(lens, set(lens, value, store))` === `value`
// If you set a value into the store, and immediately view the value
// through the lens, you get the value that was set.
{
	const lens = createLens('a');
	const value = 'baz';
	const a = value;
	const b = view(lens, set(lens, value, store));

	console.log(a === b);
}

{
	// set(lens, b, set(lens, a, store)) = set(lens, b, store)
	// If you set a lens value to `a` and then immediately set the lens value to `b`,
	// it's the same as if you'd just set the value to `b`.
	const lens = createLens('a');

	const a = 'bar';
	const b = 'baz';

	const r1 = set(lens, b, set(lens, a, store));
	const r2 = set(lens, b, store);
	console.log(isEqual(r1, r2));
}
