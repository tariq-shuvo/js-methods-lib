/*
This method creates a new array with all
sub-array elements concatenated into it
recursively up to the specified depth.
*/

const car = ["BMW", "Tyota", "Honda", "Mazda",["banana", "apple", "cherry"], "Mitshubishi", "TATA"]
const allArrayFlat = car.flat()
console.log(allArrayFlat);