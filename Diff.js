// Differentiate let var and const by a simple programme
const a=15;
var b=25;
const c=10;
if(a<b<c){
    let a=20;
    console.log(a+b+c);
}console.log(a+b+c);