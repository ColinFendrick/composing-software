const push = (a, stack) => stack.concat([a]);

const pop = stack => {
	const newStack = stack.slice(0);
	const item = newStack.pop();
	return [item, newStack];
};
const stack = (...elements) => [...elements];
