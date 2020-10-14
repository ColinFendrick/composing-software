/*
 of: Atypelifta => M(a)• map: The application of a
 function a => M(b) inside the monad context, which yields M(M(b))
 • flatten: The unwrapping of one layer of monadic context: M(M(b)) => M(b)
*/

const Monad = value => ({
	flatMap: f => f(value),
	map (f) {
		return this.flatMap(a => Monad.of(f(a)));
	}
});
Monad.of = x => Monad(x);

Monad(21).map(x => x * 2).map(x => console.log(x));