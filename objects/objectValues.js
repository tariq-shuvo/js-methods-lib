let person = {
    firstname: "jhon",
    lastname: "doe",
    age: 50,
    eyeColor: "blue",
    fullName: () => {
        return this.firstname + " " + this.lastname;
    }
};

let myArray = Object.values(person);

console.log(myArray);