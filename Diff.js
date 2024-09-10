// Differentiate let var and const by a simple programme
let a=10;
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);

console.log("Updating the values")

a=30;
c=25;
//b=10; //This cannot be updated. It gives an error.
console.log(a);
console.log(b);
console.log(c);

console.log("Difference between let and var")

function prod(){
    let x=10;
    var y=5;
    console.log(x*y)
}
prod();

