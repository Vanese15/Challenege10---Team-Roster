const fs = require("fs");
const inquirer = require("inquirer")






function managerData() [
    inquirer.prompt([
        {type: "imput",
        message: "Who are the members of your team?",
        name: "department"
        },


    ])


]


function employeeData () {
    inquirer.prompt([
        {
            type: "list",
            message: "What is your title?",
            name: "employeeTitle",
            options: ["Intern", "Engineer"]
        },
    ]

    )
}