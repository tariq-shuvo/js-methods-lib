/*
This method applies a function to
each element of an array and reduces the array
to a single value.
*/
const numbers = [2, 4, 6, 8, 10]
const sum = numbers.reduce((accumulator, currentValue)=>accumulator+currentValue)
console.log(sum)