// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function

let Array=[1,2,3,4,5]

for(let x in Array){
    console.log(Array[x])
}

console.log("for of:")

for(let x of Array){
    console.log(x)
}

console.log("While loop")

let i=0;
while(i<Array.length){
    console.log(Array[i])
    i++
}

let object=[
    {
        id : 1,
        name : "Kalki",
        budget : 200,
    },
    {
        id: 2,
        name: "Salaar",
        budget: 150,
    },
    {
        id:3,
        name: "Adipurush",
        budget: 100,
    },

]

let newArray = object.map(pov => pov.name)
console.log(newArray)
    