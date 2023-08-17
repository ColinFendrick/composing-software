const getSecret = secret => ({
    get: () => secret
  });

const msg = '.get() should have access to the closure';
const expected = 1;
const obj = getSecret(1);

const actual = obj.get();

console.log(expected === actual);

//

const secret = msg => () => msg;
const newMsg = 'My secret message';
const mySecret = secret(newMsg);

console.log(newMsg === mySecret());

// Partial applications

const partiallyApply = (fn, ...args) => {
  return function (...remainingArgs) {
    return fn.apply(this, args.concat(remainingArgs));
  };
};

const add = (a, b, c) => a + b + c;
const add11 = partiallyApply(add, 5, 6);
const add2 = partiallyApply(add, 2);

console.log(add11(2));
console.log(add2(4, 5));





