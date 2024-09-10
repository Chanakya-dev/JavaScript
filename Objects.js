// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
// Define an object with various types of properties
const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    },
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log("Main Object Properties:");
console.log("Name:", person.name);
console.log("Age:", person.age);
person.greet();
console.log("Inner Object Properties (address):");
for (const key in person.address) {
    if (person.address.hasOwnProperty(key)) {
        console.log(key + ":", person.address[key]);
    }
}
console.log("Using Object.entries to iterate over address:");
Object.entries(person.address).forEach(([key, value]) => {
    console.log(key + ":", value);
});
