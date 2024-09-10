// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let obj = [
    {
        name: "test1",
        age: "23",
        gender: "male"
    },
    {
        name: "test2",
        age: "25",
        gender: "female"
    }
];

for (let x in obj) {
    console.log(obj[x].name, obj[x].age, obj[x].gender);
}
for (let x of obj) {
    console.log(x.name, x.age, x.gender);
}

let maps = obj.map(h => h);
console.log(maps.length);
console.log(maps);
