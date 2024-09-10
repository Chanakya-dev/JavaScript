// Prepare an Object with a String,int,function and Object in it and itereate Print Names from the Inner Object

let employee = {
  name: "John",
  age: 30,
  salary: 20000,
  address: { city: "New York", state: "NY" },
  display: function () {
    console.log(this.name);
  },
};

for (let key in employee) {
  if (typeof employee[key] === "object") {
    for (let innerKey in employee[key]) {
      console.log(employee[key][innerKey]);
    }
  } else if (typeof employee[key] === "function") {
    employee[key]();
  } else {
    console.log(employee[key]);
  }
}
