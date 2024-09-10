// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
let myObject={
    name:"lavanya",
    age:21, 
   greet: function() { 
       console.log(" hello, " + this.name);
   },
   innerObject:{
       name:"Lav",
       age:20,
   }
   
   };
   myObject.greet(); 
   
   console.log("Names from the innerObject:");
     for (let key in myObject.innerObject) {
               if (myObject.innerObject.hasOwnProperty(key)) {
                   console.log(key + ": " + myObject.innerObject[key]);
               }
           }