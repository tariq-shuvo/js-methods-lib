/*
This method creates a new array from
an array-like object or an iterable object. It can
take up to two arguments: the object to convert
to an array, and a mapping function to apply to
each element of the new array.
*/

const obj = {0: "banana", 1:"apple", 2:"cherry", length: 2}

const arr = Array.from(obj);

console.log(arr);