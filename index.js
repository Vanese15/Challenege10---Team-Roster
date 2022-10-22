// Packages needed for application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const outputPath = path.join("output", "main.html");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamProfile = require("./src/generateHTML.js");


const teamMembers = [];

function init() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What is the team member's role?",
          name: "addEngineer",
          choices: ["Engineer", "Intern", "Manager", "Finished"],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEngineer) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          case "Manager":
            addManager();
            break;

          default:
            generateHTML();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        createTeam();
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID number?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
        },
        {
          type: "input",
          name: "office-number",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        teamMembers.push(manager);
        createTeam();
      });
  }

  // function to generate Team

  function generateHTML() {
    console.log("Team Profile has been created successfully!");
    fs.writeFileSync(outputPath, teamProfile(teamMembers));
  }

  createTeam();
}

// Function call to initialize app
init();
