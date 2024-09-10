// // Object with a string, integer, function, and another object inside it
const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    },
    friends: {
      friend1: { name: "Mike", age: 22 },
      friend2: { name: "Sarah", age: 25 },
      friend3: { name: "Tom", age: 28 }
    }
  };
  
  // Access the string and integer
  console.log("Person's Name: " + person.name);
  console.log("Person's Age: " + person.age);
  
  // Call the function
  person.greet();
  
  // Iterate over the inner object (friends) and print their names
  console.log('--- Friends Names ---');
  for (const key in person.friends) {
    console.log(person.friends[key].name); // Print friend names
  }
  