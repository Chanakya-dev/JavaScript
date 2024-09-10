// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
let mainObject = {
    name: "Outer Object",
    id: 1001,
    printInfo: function() {
    },
    innerObject: {
        person1: { name: "Manohar", age: 25 },
        person2: { name: "Balu", age: 30 },
        person3: { name: "bhuvi", age: 35 }
    }
}
console.log("Names from the inner object:");
for (let k in mainObject.innerObject) {
    if (mainObject.innerObject.hasOwnProperty(k)) {
        console.log(mainObject.innerObject[k].name);
    }
}


