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
//b=10; //This cannot be updated. It gives an error because it is declared as "const"
console.log(a);
console.log(b);
console.log(c);

console.log("let and var")





function prod(x,y){
    var z=30;
    console.log(x*y*z)
}

prod(10,20)

