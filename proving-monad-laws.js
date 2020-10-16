import { trace } from './functions.js';

const Id = value => ({
	// Preserve the wrapping for map by passing
	// the mapped value into the type lift
	map: f => Id.of(f(value)),
  
	// Discard one level of wrapping by omitting the of() type lift
	flatMap: f => f(value),
  
	// Easily inspect values
	toString: () => `Id(${value})`
});

// Type lift for the monad is just a reference
// to the factory
Id.of = Id;

const g = n => Id(n + 1);
const f = n => Id(n * 2);


// Left Identity:
// unit(x).flatMap(f) === f(x)
trace('Id monad left identity')([
	Id(20).flatMap(f),
	f(20)
]);


// Right Identity:
// m.flatMap(unit) === m
trace('Id monad right identity')([
	Id(100).flatMap(Id.of),
	Id(100)
]);


// Associativity:
// m.flatMap(f).flatMap(g) ===
// m.flatMap(x => f(x).flatMap(g))
trace('Id monad associativity')([
	Id(30).flatMap(g).flatMap(f),
	Id(30).flatMap(x => g(x).flatMap(f))
]);
