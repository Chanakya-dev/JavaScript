// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object

let person=
    {
        id:1,
        name : "Kalki",
        greet: function(){
            console.log("Kalki 2898AD")
            let name="Prabhas";
            console.log(name)
        },
    };
    
console.log(person.name)
console.log(person["id"])

person.greet()