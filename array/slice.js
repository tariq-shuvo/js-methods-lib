/*
This method returns a shallow copy of a
portion of an array into a new array object
selected from begin to end (end not included).
*/
const car = ["BMW", "Tyota", "Honda", "Mazda", "Mitshubishi", "TATA"]

const sliced = car.slice(1, 4);

console.log(sliced)