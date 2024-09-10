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

