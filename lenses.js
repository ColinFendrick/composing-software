const view = (lens, store) => lens.view(store);
const set = (lens, value, store) => lens.set(value, store);

const lensProp = prop => ({
	view: store => store[prop],
	set: (value, store) => ({
		...store,
		[prop]: value
	})
});

const fooStore = {
	a: 'foo', b: 'bar'
};

const [aLens, bLens] = [lensProp('a'), lensProp('b')];

const [a, b] = [view(aLens, fooStore), view(bLens, fooStore)];

console.log(a, b);
