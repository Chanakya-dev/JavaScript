// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
const peopleSet = new Set([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]);

const peopleArray = Array.from(peopleSet);

const mappedPeople = peopleArray.map(person => {
    return {
        name: person.name,
        age: person.age + 1 
    };
});

console.log("Using map function:");
mappedPeople.forEach(person => {
    console.log(person.name, person.age);
});
