/*
This method is similar to the
reduce() method. However, it iterates over the
array elements from right to left instead of
from left to right.
*/
const numbers = [2, 4, 6, 8, 10]
const sum = numbers.reduceRight((accumulator, currentValue)=>accumulator+currentValue)
console.log(sum)