/*
method changes the contents of an
array by removing or replacing existing
elements and/or adding new elements in place.
*/

const car = ["BMW", "Tyota", "Honda", "Mazda", "Mitshubishi", "TATA"]
const arr = ["banana", "apple", "cherry"]

car.splice(2, 1, ...arr);

console.log(car);