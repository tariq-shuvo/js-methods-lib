/*
method executes a provided function
once for each array element. It doesn't return
anything, it just executes the callback function
on each element of the array.
*/
const arr = ["banana", "apple", "cherry"]

arr.forEach((item, index)=>{
    console.log(item, index);
})