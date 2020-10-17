// When an object forwards to another obj
// Ex: built-in types to forward built-in methods
// Conserves memory and dynamincally update many instances
import { objs } from './objs.js';


const delegate = (a,b) => Object.assign(Object.create(a),b);

const d = objs.reduceRight(delegate, []);

console.log(
	'delegation', d, `enumerable keys: ${Object.keys(d)}`
);
