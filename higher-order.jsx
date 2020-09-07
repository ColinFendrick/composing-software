/* 
  HOFs take a func as an argument, or returns a function
  Can create a function that abstracts a process
  IE Reducers, which iterate over a list
*/

/*
  Reduce takes a reducer fn, initial value, and array to iterate
  Each value calls the reducer
*/
const reduce = (reducer, initial, arr) => {
	let acc = initial;
	for (let i = 0, { length } = arr; i< length; i++) {
    
		// unique bits
		acc = reducer(acc, arr[i]);
	}
	return acc;
};

console.log(
	reduce((acc, curr) => acc + curr, 0, [1,2,3])
);


/*
  Receives predicate fn (predicate fn returns boolean)
  and if fn(curr) is true we concat the curr value to the acc array,
  otherwise we return the current accumulator value
*/

const filter = (
	fn, arr
) => reduce((acc, curr) => fn(curr) ?
	acc.concat([curr]) :
	acc, [], arr
);

const censor = words => filter(
	words => words.length !== 4, words
);
console.log(
	censor('every one of these words except fuck or another quadruple-lettered string a la brrp'.split(' '))
);

/*
  HOFs can be used to make functions polymorphic,
  ie handle different data types
*/

const highpass = cutoff => n => n >= cutoff;

console.log(
	[1, 2, 3, 4, 5].filter(highpass(3))
);
