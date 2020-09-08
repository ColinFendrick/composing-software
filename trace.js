// A small handy function for checking where errors occur in stack

import { compose, trace, f, g } from './functions.js';


const h = compose(
	trace('after f'),
	f,
	trace('after g'),
	g
);

h(20);
