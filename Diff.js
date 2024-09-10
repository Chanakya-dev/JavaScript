// Differentiate let var and const by a simple programme
let a=1;
let b=2;
{
    let a=2;
   console.log(a+b);
}
    console.log(a+b);

var c=1;
var d=2;{
    var c=2;
    console.log(c+d);   
}
        console.log(c+d);
    

const e=1;
const f=2;
{
    const e=2;
    console.log(e+f);
}
        console.log(e+f);
    
