/**
 * add two numbers
 * nobody will ever call this with something else than numbers,
 * nor will it ever be called with null - promised !
 * 
 * don't expect exact arithmetic with decimal numbers either...
 * 
 * @param {number} a first operand
 * @param {number} b second operand
 */
const add = (a, b) => a + b;

// usage

add(1, 2); // ==> 3  :)

add(0.1, 0.2); // ==> 0.30000000000000004  :/

add(42, 'Dent'); // ==> '42Dent'  :(
add(null, 42); // ==> 42  ?!
