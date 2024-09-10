// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let obj = [
    {
        name: "marsh",
        age: "21",
        gender: "male"
    },
    {
        name: "mello",
        age: "22",
        gender: "male"
    }
];

console.log("for in loop:");
for (let x in obj) {
    console.log(obj[x].name, obj[x].age, obj[x].gender);
}
console.log("\nfor of loop:");
for (let x of obj) {
    console.log(x.name, x.age, x.gender);
}

console.log("\n while loop:");
let i = 0;
while (i < obj.length) {
    console.log(obj[i].name, obj[i].age, obj[i].gender);
    i++;
}
console.log("\n map");
let maps = obj.map(h => h);
console.log("Number of objects:", maps.length);
console.log(maps);