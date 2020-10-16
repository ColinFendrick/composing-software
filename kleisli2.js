import { trace, composePromises, composeM } from './functions.js';

const label = 'Promise composition';
const f = n => Promise.resolve(n * 2);
const g = n => Promise.resolve(n + 1);


const h = composePromises(f, g);

h(20).then(trace(label));

composeM('then')(f, g)(20).then(trace(`${label} with composeMethod`));
