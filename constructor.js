const empty = ({ constructor } = {}) => constructor ?
	new constructor() : undefined;

const foo = [10];
console.log(empty(foo));

const bar = Promise.resolve(210); // This fails -- can't use new keyword with any factory
console.log(empty(bar));

// We can make the above better with .of()
const ofEmpty = ({ constructor } = {}) => constructor.of ?
	constructor.of() : undefined;
// Unfortunately, this doesn't work for most data types
