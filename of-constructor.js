const createUser = ({
	userName = 'Anonymous',
	avatar = 'anon.png'
} = {}) => ({
	__proto__: {
		constructor: createUser
	},
	userName,
	avatar
});

const empty = ({ constructor } = {}) => constructor.of ?
	constructor.of() :
	undefined;

const foo = createUser({
	userName: 'Empty',
	avatar: 'me.png'
});

console.log(
	empty(foo),
	foo.constructor === createUser.of,
	createUser.of === createUser
);
