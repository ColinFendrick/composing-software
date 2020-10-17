// Reduce/fold/accumulate iterates over list and returns one value

const basicAcc = arr => arr.reduce((acc, n) => acc + n, 0);
console.log(
	basicAcc([1,4,9,16])
);

// Write other fns as reduce calls
const map = (f, arr) => arr.reduce((acc, item, ix) => acc.concat(f(item, ix, arr)), []);
const filter = (f, arr) => arr.reduce((newArr, item) =>
	f(item) ? newArr.concat([item]) : newArr, []);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v, x));

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

/*
	Redux-style reducers:
	- A reducer called w/ no params should return valid initial state
	- Reducers which cannot handle an action type should still return state
	- Pure fn
*/

/**
 * reducer(state, action: { type, payload }) => newState
 */

const ADD_VALUE = 'ADD_VALUE';
const reduxStyleReducer = (state = 0, action = {}) => {
	const { type, payload } = action;
	switch (type) {
	case ADD_VALUE:
		return state + payload.value;
	default: return state;
	}
};

// Since this follows the standard reducer pattern, it can go anywhere a normal reducer would be used

const actions = [
	{ type: ADD_VALUE, payload: { value: 1 }},
	{ type: ADD_VALUE, payload: { value: 1 }
	},
	{ type: ADD_VALUE, payload: { value: 1 }},
	{ type: ADD_VALUE, payload: { value: 1 }}
];

actions.reduce(reduxStyleReducer, 0); // 4
