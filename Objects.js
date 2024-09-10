// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
let man={
    name:"shahid",
    id:1,
   profile1: function (){
console.log(`hey!${this.name}`)
    },
   obj:{
 name:"arbaz",
id:2,
profile: function (){
    console.log(`hey!${this.name}`)
        }

 } };
man.profile1();
man.obj.profile();