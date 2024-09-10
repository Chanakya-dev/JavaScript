
let a=[{id:52,names:"vijay"},{id:2,name:"aaz"}];
console.log("for of loop");
for (let x of a) {
    console.log(x);
}
console.log("for in loop");
for (let x in a) {
    // console.log(x);
console.log(a[x]);
    }
    console.log("while loop");
   let i=0;
while (i<a.length) {
    console.log(a[i]);
    i++;
}
console.log("using maps to iterate");
let mp=a.map(a=>a);
console.log(mp);