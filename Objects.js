// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object
let obj =[
    {
        id:1,
        name:"shoeb",
        add :function m(){
            a+b;
        }
    },
    {
        id:2,
        name:"mirza"
    }
]

let objname=obj.map(s=> s.name);
console.log(objname);