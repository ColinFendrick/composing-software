# Definitions

__Curried function__: takes multiple parameters one at a time, by taking the first argument, and returnnign a series of functions which each take the next argument until all the parameters have been fixed, and the funciton application can complete, at which point the resulting value is returned.

__Partial application__: a function which has already been applied to some - but not yet all - of its arguments. The arguments whcih the function has already been applied to are called _fixed parameters_.

__Point-free__: style of deifning a function without reference to its arguments. Generally, a point-free function is created by calling a function which returns a function (often a curried function).

__Curried functions are great for function composition__ becuase they allow you to easily convert an n-ary function into the unary functionf orm needed for function composition pipelines: Functions in a pipeline must expect exactly one argument.

__Data last functions__ are convenient for composition because they can easily be used in point-free style.
