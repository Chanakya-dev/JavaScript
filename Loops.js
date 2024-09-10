// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let person=[
    {
        name:"lavanya",
        age:21
    },
    {
        name:"ravathi",
        age:22
    }
];
console.log("for of");
for(let x of person){
    console.log(x);
}

console.log("for in");
for(let x in person){
    console.log(person[x]);
}

console.log("while loop");
let i=0;
while(i<person.length){
console.log(person[i]);
i++;
}

//array of objects
let employee=[
    {
        age:23,
        name:"Lav",
        id:1
    },
    {
        age:24,
        name:"rev",
        id:2
    }
];
// console.log("using map function");
// console.log(employee[1].name);
// let p=employee.map(pov => pov.name);
console.log("Using map function:");
employee.map(employee => {
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}`);
});