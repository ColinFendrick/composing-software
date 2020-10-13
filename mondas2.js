import { compose, trace } from './functions.js';

const label = 'API call composition';
const getUserById = id => id === 3 ? Promise.resolve({
	name: 'Kurt',
	role: 'Author'
}) : undefined;

const hasPermission = ({ role }) =>
	Promise.resolve(role === 'Author');

const authUser = compose(hasPermission, getUserById);

authUser(3).then(trace(label));
