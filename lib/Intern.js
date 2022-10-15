const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, school);

        this.school = this.school;
        }
        getschool() {
            return this.school
        }
        getRole() {
            return "Intern";
        }
}

module.exports = Intern;
