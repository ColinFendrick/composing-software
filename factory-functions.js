// Any function which is not a class or constructor that returns a new object
// Any function can return object. If it does so w/o the new keyword, it's a factory function

// Literals:
const user = {
	userName: 'echo', avatar: 'echo.png',
	setUserName (userName) {
		this.userName = userName;
		return this;
	}
};

console.log(user.setUserName('foo').userName);

// Factory:
const createUser = ({ userName, avatar }) => ({
	userName, avatar,
	setUserName (userName) {
		this.userName = userName;
		return this;
	}
});

console.log(
	createUser({ username: 'echo', avatar: 'echo.png' })
		.setUserName('renamed').userName
);

// Returning Objects
const noop = () => ({ foo: 'bar' });

// Rest/spread
const rotate = ([first, ...rest]) => [...rest, first];
const arr = [1,2,3,4];
console.log(
	rotate(arr), rotate(arr));
