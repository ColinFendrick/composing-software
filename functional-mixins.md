# Functional Mixins

## When to use:

Always try for simplest abstraction possible.
Start with pure function.
If you need an object with persistent state, opt for a
factory function. If you need more complex objects,
try functional mixins.
Good use cases:

- Application state management (redux store)
- Cross-cutting concerns (centralized logger)
- Composable functional data types, eg Javascript Array

Most problems can be solved using pure functions. Functional
mixins have problems of their own.

- Favor pure functions > factories > functional mixins > classes
- Avoid the creation of is-a relationships
- Avoid implicit dependencies between mixins
