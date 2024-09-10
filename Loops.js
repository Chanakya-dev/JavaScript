// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let people =[
    { name: "Ravi", age: 25 },
    { name: "suresh", age: 30 },
    { name: "Hari", age: 35 }
];
for (let person of people){
    console.log(person.name,person.age);
}
let i=0;
while(i< people.length){
    console.log(people[i].name, people[i].age);
    i++;
}
let students = [
    { name: "Ravi", grade: "A" },
    { name: "suresh", grade: "B" },
    { name: "Hari", grade: "A+" }
]
console.log("Using map function:");
students.map(student => {
    console.log(student.name, student.grade);
});