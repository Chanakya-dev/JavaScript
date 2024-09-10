function f1(){
    let a=10;
    let b=20;
    if(a<b){
        let a=30;
        let r1=a+b;
        console.log(r1);
    }
    let r2=a+b;
    console.log(r2);
}
function f2(){
    var a=10;
    var b=20;
    if(a<b){
        var a=30;
        var r1=a+b;
        console.log(r1);
    }
    let r2=a+b;
    console.log(r2);
}
function f3(){
    const a=10;
    const b=20;
    const r2=a+b;
    console.log(r2);
}
f1();
f2();
f3();