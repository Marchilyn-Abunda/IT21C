class Employee {
  #name;
  #baseSalary;

  setName(val) {
    this.#name = val;
  }

  setBaseSalary(val) {
    this.#baseSalary = val;
  }

  getName() {
    return this.#name;
  }

  // Implementation of Abstraction
  getSalary() {
    if (this.#baseSalary == 0) {
      return this.#baseSalary;
    } else {
      let bonus = 1000;
      return this.#baseSalary + bonus;
    }
  }
}

// Create objects

var emp = new Employee();

emp.setName("Marchilyn");
emp.setBaseSalary(0);

// Print
console.log(emp.getName());
console.log(emp.getSalary());
