const logTail = (head, ...tail) => tail;
console.log(logTail(1, 2, 3)); // [2, 3]

const shiftToLast = (head, ...tail) => [...tail, head];
console.log(shiftToLast(1, 2, 3)); // [2, 3, 1]
