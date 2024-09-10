// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
let obj = {
    name: "vijay",               
    rollno: 48,                 
    car: function() {           
        console.log('this is just for demo');
    },
    friends: {                  
        friend1: { name: "Shubam", phone: 965302 },
        friend2: { name: "Rahul", phone: 879456 },
        friend3: { name: "Anjali", phone: 758963 }
    }
};


obj.car();  


for (let key in obj.friends) {
    console.log(obj.friends[key].name);
}

