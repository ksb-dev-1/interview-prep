// Step 1: Define the Person constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Step 2: Define Employee constructor
function Employee(firstName, lastName, age, jobTitle, salary) {
  // Inherit Person's properties (correct way)
  Person.call(this, firstName, lastName, age);

  // Employee-specific properties
  this.jobTitle = jobTitle;
  this.salary = salary;
}

// Step 3: Set up prototype chain (inherit from Person.prototype)
Employee.prototype = Object.create(Person.prototype);

// Step 4: Fix constructor reference (optional but good practice)
Employee.prototype.constructor = Employee;

// Step 5: Create instance (now properly inherits from Person)
const employee1 = new Employee(
  "John",
  "Doe",
  30,
  "Frontend Developer",
  1000000
);

// Step 5: Verify all properties
console.log(employee1.firstName); // "John"
console.log(employee1.lastName); // "Doe"
console.log(employee1.age); // 30
console.log(employee1.jobTitle); // "Frontend Developer"
console.log(employee1.salary); // 1000000
