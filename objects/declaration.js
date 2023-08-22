let person = {
    firstname: "jhon",
    lastname: "doe",
    age: 50,
    eyeColor: "blue",
    fullName: () => {
        return this.firstname + " " + this.lastname;
    }
}

console.log(person);

delete person.fullName;

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);
    }
}