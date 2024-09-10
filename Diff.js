// Differentiate let var and const by a simple programme
function f1(){
    let a=20;
    let b=30;
    if(a<b){
        c=25;
         console.log(" let c : " + c);
    }
    console.log(" let a : " + a);
}

f1();

function f2(){
    var s=10;
    var d=12;
    console.log(" var s : " + s);
    if(s>d){
        var e=15;
        console.log(" var e : " + e);
    }
    console.log(" vas s : " + s);
    
}
f2();

function f3(){
    const k=3;
    const y=4;
    add=k+y;
       console.log(" count add : " + add);
    
}
f3();