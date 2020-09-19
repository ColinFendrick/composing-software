import { curry, log, f as double } from './functions.js';

const Identity = value => ({
  map: fn => Identity(fn(value))
});
const map = curry((fn, mappable) => mappable.map(fn));
const mdouble = map(double);

mdouble(Identity(4)).map(log);
mdouble([4]).map(log);
