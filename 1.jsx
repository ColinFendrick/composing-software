const compose = (f, g) => x => f(g(x));

const double = n => n*2;
const inc = n => n + 1;
const transform = compose(double, inc);
transform(3); // 8

/* x is 3 and passed into g, or inc, first
  Then inc(3) is passed to f, or double,
  8 is returnedd
*/
