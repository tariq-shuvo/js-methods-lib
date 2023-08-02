
/*
This method creates a new array with
the results of calling a provided function on
every element in the calling array.
*/

const ages = [90, 10, 18, 20, 14, 15, 25, 80, 70, 60, 44, 75]
const newArray = ages.map((a, b)=>{
    return a*2
});
console.log(newArray)