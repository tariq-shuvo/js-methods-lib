/*
This method returns an iterator
that provides the values for each index in
the array. It takes no arguments
*/

const car = ["BMW", "Tyota", "Honda", "Mazda", "Mitshubishi", "TATA"]
const iterator = car.values();

for(const values of iterator){
    console.log(values);
}