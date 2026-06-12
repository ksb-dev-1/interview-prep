class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position, salary) {
    super(firstName, lastName);
    this.position = position;
    this.salary = salary;
  }

  toString() {
    return `${this.fullName()} ${this.position} ${this.salary}`;
  }
}

const emp = new Employee("John", "Doe", "Developer", 5000);
console.log(emp.fullName()); // Should log "John Doe"
console.log(emp.toString()); // Should log "John Doe - Position: Developer, Salary: 5000"
