// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object

// Prepare an object with a string, int, function, and inner object
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    friends: {
        friend1: "rohit",
        friend2: "Amir",
        friend3: "naezy"
    }
};

// Calling the function
person.greet(); 

// Iterate through the inner object and print the names
console.log("Friends list:");
for (let key in person.friends) {
    console.log(person.friends[key]);
}
