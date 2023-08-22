let person = {
    firstname: "jhon",
    lastname: "doe",
    age: 50,
    eyeColor: "blue",
    fullName: () => {
        return this.firstname + " " + this.lastname;
    }
};

console.log(JSON.stringify(person));