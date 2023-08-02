/*
This method checks if all elements in
an array pass a test (provided as a function). It
returns true if all elements pass the test;
otherwise, it returns false.
*/

const numbers = [2, 4, 6, 8, 10]

const isEven = (num) => num % 2 == 0

const result = numbers.every(isEven);

console.log(result);