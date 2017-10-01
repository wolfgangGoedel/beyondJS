/**
 * add two integers
 *
 * no type annotation required
 */
let add a b => a + b;

/* usage */
add 1 2;

add 0.1 0.2;

add 42 "Dent";

/* there is no null :) */
/* and currying comes for free */
let increment = add 1;
