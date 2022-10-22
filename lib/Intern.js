const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }
  getschool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

const internProfile = ["name", "id", "email", "school"];

module.exports = Intern;
