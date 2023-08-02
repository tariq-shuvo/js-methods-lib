/*
This method fills all the elements of an
array from a start index to an end index with a
static value. It can take up to three arguments:
the value to fill with, the start index, and the
end index.
*/

const arr = ["banana", "apple", "cherry"]

arr.fill("grape", 1, arr.length);
console.log(arr);