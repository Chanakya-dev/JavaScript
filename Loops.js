// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let obj =[
    {
        id:1,
        name:"shoeb",
        add :function m(){
            a+b;
        }
    },
    {
        id:2,
        name:"mirza"
    }
]
for (let m in obj){
    console.log(obj[m]);
}
console.log("-------------------------------------------------");

for (let m of obj){
    console.log([m]);
}