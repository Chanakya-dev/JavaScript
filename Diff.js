let a=10;
var b=5;
const c=69;

if(true){
    let a=1
    console.log("inside the block of let variable after re-declaring a ",a);
}
console.log("outside the block of let variable a ",a);


if(true){
    var b=55
    console.log("inside the block of let variable after re-declaring b ",b);
}
console.log("outside the block of let variable b ",b);


if(true){
    const c=989676
    console.log("inside the block of let variable after re-declaring c ",c);
}
console.log("outside the block of let variable c ",c);