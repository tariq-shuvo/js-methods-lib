/*
This method maps each element
using a mapping function, then flattens the
result into a new array.
*/

const numbers = [2, 4, 6, 8, 10]

const result = numbers.flatMap(num => num * 2);

console.log(result);