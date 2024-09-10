let details=[
    {
        id:1,
        name:"Revathi",
        age:22
    },
    {
        id:2,
        name:"Lavanya",
        age:21
    },
    {
        id:3,
        name:"Prasanna",
        age:20
    }
];
console.log("using..for of");
for(let x of details){
    console.log(x);
}
console.log("using..for in");
for(let y in details){
    console.log(details[y]);
}
console.log("using..while loop");
let i=0;
while(i<details.length){
    console.log(details[i]);
    i++;
}
console.log("using..map function");
let d1=details.map(pov=>pov.id);
console.log(d1);
let d2=details.map(pov=>pov.name);
console.log(d2);
let d3=details.map(pov=>pov.age);
console.log(d3);