/**
 * add two numbers
 * this is type safe :)
 * 
 * still don't expect exact arithmetic with decimal numbers though...
 * 
 * @param a first operand
 * @param b second operand
 */
const add = (a: number, b: number) => a + b;

// usage

add(1, 2); // ==> 3  :)

add(0.1, 0.2); // ==> 0.30000000000000004  :/

add(42, 'Dent'); // ==> compile time errors :)
add(null, 42);
