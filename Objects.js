// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object

let oops = {
    name: "hellos",
    age: 89,
    gender: "male",
    hello: function () {
        console.log(this.name);
    },
};
let group = oops.hello();
