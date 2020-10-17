import { pipe } from './functions.js';

// An example of tight coupling:
// THIS IS BAD

// Base object factory
const base = spec => {
	const that = {}; // Create an empty object
	that.name = spec.name; // Add it a "name" prop
	return that; // Return object
};

// Construct a child, inheriting from base
const child = spec => {
	const that = base(spec); // Use base constructor
	that.sayHello = () => `Hello, I'm ${that.name}`; // Augment
	return that; // return the object
};

const result = child({ name: 'functional object' });
console.log(result.sayHello());


// FUNCTIONAL MIXIN INSTEAD

const flying = o => {
	let isFlying = false;

	return Object.assign({}, o, {
		fly () {
			isFlying = true;
			return this;
		},
		isFlying: () => isFlying,
		land () {
			isFlying = false;
			return this;
		}
	});
};

const bird = flying({});
console.log(bird.isFlying());
console.log(bird.fly().isFlying());

// We need to pass an object to be extended into flying(),
// so we can create something to compose

const quacking = quack => o => Object.assign({}, o, {
	quack: () => quack
});

const quacker = quacking('Quack!')({});
console.log(quacker.quack());

// Composition of functional mixins
let createDuck = quack => quacking(quack)(flying({}));

let duck = createDuck('Quack!');

console.log(`
  is flying: ${duck.fly().isFlying()},
  quacking: ${duck.quack()}
`);

// Awkward ^^ so let's use pipe:
createDuck = quack => pipe(
	flying,
	quacking(quack)
)({});

duck = createDuck('QUACK');
console.log(`
  is flying: ${duck.fly().isFlying()},
  quacking: ${duck.quack()}
`);

