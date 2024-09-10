// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
// Define the object
let a1 = {
    name: "marsh",              
    age: 20,                    
    f1: function() {         
        console.log( this.name);
    }
};
a1.f1();
