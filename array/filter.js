/*
This method creates a new array with
all elements that pass the test implemented by
the provided function.
*/
const ages = [90, 10, 18, 20, 14, 15, 25, 80, 70, 60, 44, 75]
const filteredAges = ages.filter(age=>age>30)
console.log(filteredAges)