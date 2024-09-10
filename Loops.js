// Take an Array of Objects and Iterate them using for of and for in and While Loops
// Prepare an Array With Set of Objects and Iterate them using Map function

let employees = ["John", "Doe", "Jane", "Doe", "Mary", "Smith"];

// Using for of loop
for (let employee of employees) {
  console.log(employee);
}
// Using for in loop
for (let index in employees) {
  console.log(employees[index]);
}

// Using while loop
let i = 0;
while (i < employees.length) {
  console.log(employees[i]);
  i++;
}

// Using map function
employees.map((employee) => console.log(employee));
