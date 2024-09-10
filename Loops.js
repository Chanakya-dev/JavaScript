// Take an Array of Objects and Iterate them using for of and for in and While Loops 
// Prepare an Array With Set of Objects and Iterate them using Map function
let array=[{id:48,phone:767493,name:"vijay"},{id:45,phone:965302,name:"shubam"}]
console.log("using map")
let listt = array.map(ar => array);
console.log(listt);
console.log(" Iterating using for of ")
for (let ss of array) {
    console.log(ss);}
    console.log(" Iterating using for in ")
for(let tt in array){
    console.log(array[tt]);
}
console.log("iterating by using the while loop");
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}

  
  




