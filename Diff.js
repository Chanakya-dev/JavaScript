// Differentiate let var and const by a simple programme

var x = 5;
console.log(x); 
x = 10; 
console.log(x); 
if (true) {
  var x = 20; 
  console.log(x); 
}
console.log(x);

console.log("=====let===========");

let y = 5;
console.log(y); 
y = 10;
console.log(y); 
if (true) {
  let y = 20; 
  console.log(y);
}
console.log(y); 

console.log("======const==========");

const z = 5;
console.log(z); 

if (true) {
  const z = 20; 
  console.log(z);
}
console.log(z);
