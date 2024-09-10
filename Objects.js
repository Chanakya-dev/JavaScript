let person={
    details:[
    {
        name:"Revathi",
        age:22,
        isStudent:false
    },
    {
        name:"Lavanya",
        age:21

    }
],
greet:function(index){
    console.log(`Hello,my name is ${this.details[index].name}`);
}
};
person.greet(0);
console.log("Remaing names:");
for (let i = 0; i < person.details.length; i++) {
    console.log(person.details[i].name);
}