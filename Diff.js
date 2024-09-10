// Differentiate let var and const by a simple programme

// Using var
function varExample() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("Inside if block (var):", x); // Output: 20
  }
  console.log("Outside if block (var):", x); // Output: 20
}

function letExample() {
  let y = 10;
  if (true) {
    let y = 20;
    console.log("Inside if block (let):", y); // Output: 20
  }
  console.log("Outside if block (let):", y); // Output: 10
}

// Using const
function constExample() {
  const z = 10;
  console.log("Initial const value:", z); // Output: 10

  const obj = { name: "John" };
  obj.name = "Doe";
  console.log("Modified object property in const:", obj.name); // Output: Doe
}

varExample();
letExample();
constExample();
