
/*
This method sorts the elements of an
array in place and returns the sorted array.
It can take an optional compare function as
an argument
*/

const car = ["BMW", "Tyota", "Honda", "Mazda", "Mitshubishi", "TATA"]
car.sort();
console.log(car);

const ages = [90, 10, 18, 20, 14, 15, 25, 80, 70, 60, 44, 75]
// sorting values decending to assending
ages.sort((a, b)=>{
    return (b-a)
});
console.log(ages)