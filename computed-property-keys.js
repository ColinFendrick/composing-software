const arrToObj = ([key, value]) => ({ [key]: value });
console.log(arrToObj(['foo', 'bar']));

// Default parameters
const createUser = ({
	userName = 'Anonymous',
	avatar = 'anon.png'
} = {}) => ({
	userName, avatar
});
