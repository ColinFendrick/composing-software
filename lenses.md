# Lenses

A lens is a composable pair of pure getter and setter functions which focus on a particular field inside an object, and obey a set of axioms known as the lens laws. Think of the object as the whole and the field as the part. The getter takes a whole and returns the part of the object that the lens is focused on.

## Why

Lenses allow you to abstract state shape behind getters and setters. Instead of littering your codebase with code that dives deep into the shape of a particular object, import a lens. If you later need to change the state shape, you can do so in the lens, and none of the code that depends on the lens will need to change.


## Background

In 1985, “Structure and Interpretation of Computer Programs”60 described getter and setter pairs (called put and get in the text) as a way to isolate an object’s shape from the code that uses the object. The text shows how to create generic selectors that access parts of a complex number independent of how the number is represented. That isolation is useful because it breaks state shape dependencies. These getter/setter pairs were a bit like referenced queries which have existed in relational databases for decades.
Lenses took the concept further by making getter/setter pairs more generic and composable. They were popularized after Edward Kmett released the Lens library for Haskell. He was influenced by Jeremy Gibbons and Bruno C. d. S. Oliveira, who demonstrated that traversals express the iterator pattern, Luke Palmer’s “accessors”, Twan van Laarhoven, and Russell O’Connor.

### Axioms

1. view(lens, set(lens, value, store)) ≡ value — If you set a value into the store, and immediately view the value through the lens, you get the value that was set.
2. set(lens, b, set(lens, a, store)) ≡ set(lens, b, store) — If you set a lens value to a and then immediately set the lens value to b, it’s the same as if you’d just set the value to b.
3. set(lens, view(lens, store), store) ≡ store — If you get the lens value from the store,
and then immediately set that value back into the store, the value is unchanged.

__Note:__ When using lenses in production, use a library. Best one is Ramda
