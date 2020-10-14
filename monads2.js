import { compose, trace } from './functions.js';

const label = 'API call composition';
const getUserById = id => id === 3 ? Promise.resolve({
	name: 'Kurt',
	role: 'Author'
}) : undefined;

const hasPermission = ({ role }) =>
	Promise.resolve(role === 'Author');

let authUser = compose(hasPermission, getUserById);

// authUser(3).then(trace(label)); // hasPermission expecting user object


// instead ...
const composeM =
	flatMap => (...ms) =>
		(ms.reduce((f, g) => x => g(x)[flatMap](f)));

const composePromises = composeM('then');
// Do this instead!
authUser = composePromises(hasPermission, getUserById);
authUser(3).then(trace(label));

/*
	Functions can compose: a => b => c becomes a => c
	Functors can compose functions w / context: given F(a) and two functions, a => b => c,
		return F(c).
	Monads can compose type lifting functions: a => M(b), b => M(c) becomes a => M(c)
*/

