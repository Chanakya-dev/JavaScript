// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function

// Array of Objects
const gang = [
    { name: 'shahrukh', age: 25 },
    { name: 'salman', age: 30 },
    { name: 'Ajay', age: 35 }
];

// Using for...of loop (to iterate through the array)
console.log("Using for...of loop:");
for (const person of gang) {
    console.log(person.name, person.age);
}

// Using for...in loop (to iterate through object properties)
console.log("Using for...in loop:");
for (const mine in gang) {
    console.log(gang[mine].name, gang[mine].age);
}

// Using while loop
console.log("Using while loop:");
let i = 0;
while (i < gang.length) {
    console.log(gang[i].name, gang[i].age);
    i++;
}

// Using map() function to iterate through the array of objects
console.log("Using map() function:");
gang.map(person => console.log(person.name, person.age));

console.log("==================================");

// Array of objects
let users = [
    { name: 'Rahul', age: 25 },
    { name: 'Shiv', age: 30 },
    { name: 'Khan', age: 35 }
];

// Using for...of loop
console.log("Using for...of loop:");
for (let user of users) {
    console.log(user.name, user.age);
}

// Using for...in loop (to iterate over object properties)
console.log("Using for...in loop:");
for (let index in users) {
    console.log(users[index].name, users[index].age);
}

// Using while loop
console.log("Using while loop:");
let j = 0;
while (j < users.length) {
    console.log(users[j].name, users[j].age);
    j++;
}
