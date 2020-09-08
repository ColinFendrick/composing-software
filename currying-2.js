/* Curried functions take multiple args one at a time
  Here add() takes one arg, returns a partial application of itself
  with 'a' fixed in closure scope
*/
const add = a => b => a + b;
const five = add(2)(3);

/* Partial application is a function which has been applied to some but not all of its args
  and take as many or as few args as desired. Curried fns always return unary funcs, ooth,
  and curried fns always return partial applications.
  However, partial applications can be created outside of curried fns
*/

// Point-free style creates fn definitions which do not reference fn arguments

const inc = add(1); // the partial application of add
const four = inc(3);

// Why curry? To simplify and modularize our code:

import { compose, f, g, h } from './functions.js';
const fortyTwo = compose(f, g, h)(24);
// 24 - 4 + 1 * 2
let thirty = compose(g, g, h, f)(16);
thirty = compose(h, g, g, f, f)(8); // also
const eight = compose()(8);
