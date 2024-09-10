// Load an Array with an Integer and Iterate them with  a Normal for Loop 
let arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log("foreach by using of");
for(let x of arr){
  console.log(x);
}
console.log("foreach by using in");
for(let x in arr){
  console.log(arr[x]);
}
