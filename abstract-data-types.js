const stack = (...items) => ({
	push: item => stack(...items, item),
	pop: () => {
		const newItems = [...items];
		const [ item] = newItems.splice(-1);
		return [item, stack(...newItems)];
	},
	toString: () => console.log(`stack${ items.join(',')}`)
});

const push = (item, stack) => stack.push(item);
const pop = stack => stack.pop();

const test = stack(1, 2, 3);
test.toString();

const one = pop(test);

push(one, test);
test.toString();

push(4, test);
test.toString();