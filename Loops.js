/// Array of objects
const people = [
    { name: "John", age: 25, occupation: "Engineer" },
    { name: "Sarah", age: 30, occupation: "Teacher" },
    { name: "Mike", age: 22, occupation: "Designer" }
  ];
  
  // Using `for...of`
  console.log('--- For...of Loop ---');
  for (const person of people) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`);
  }
  
  // Using `for...in` to iterate properties of each object
  console.log('--- For...in Loop ---');
  for (const person of people) {
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    console.log('---');
  }
  
  // Using `while` loop
  console.log('--- While Loop ---');
  let i = 0;
  while (i < people.length) {
    console.log(`Name: ${people[i].name}, Age: ${people[i].age}, Occupation: ${people[i].occupation}`);
    i++;
  }
  