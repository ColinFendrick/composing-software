// Composes in reverse (l-r) order from other

import { pipe, trace, g, f } from './functions.js';

const h = pipe(
	g, trace('after g'), f, trace('after f')
);
h(20);
