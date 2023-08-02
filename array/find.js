/*
This method returns the value of the
first element in an array that passes a test
(provided as a function). If no element passes
the test, it returns undefined.
*/

const numbers = [10, 20, 30, 40, 60, 70, 80, 90]
const checkGreaterValue = num => num > 30
const findGraterValue = numbers.find(checkGreaterValue);

console.log(findGraterValue)