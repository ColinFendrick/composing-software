import { pipe, log } from './functions.js';

const map = fn => mappable => mappable.map(fn);

const arr = [1, 2, 3, 4];

const isEven = n => n % 2 === 0;

const stripeAll = map(n => isEven(n) ? 'dark' : 'light');
const striped = stripeAll(arr);
log(striped);


const doubled = map(n => n * 2)(arr);
log(doubled);