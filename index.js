// TODO: Include packages needed for this application

const fs = require("fs");
const path = require("path");
const distPath = path.join("./dist");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


const teamMembers = [];



const teamGenerator = () => {
    return inquirer.prompt([{
        type: "list",
        message: "What is the team member's role?",
        name: "addManager",
        options: ["Manager","Engineer", "Intern"]
   }]).then(function(userInput) {
    switch(userInput.addManager) {
        case "Manager":
            addManager();
            break;
        case "Engineer":
            addEngineer(); 
            break;
        case "Intern":
            addIntern();
            break;   
    }})

};    
    
const addManager = () => {
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
       },
       {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
        },
        {
         type: "input",
         name: "managerEmail",
         message: "What is the manager's employee email address?"
         },
        {
         type: "input",
         name: "OfficeNumber",
         message: "What is the manager's office number?"
        }
    
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        teamGenerator();
    })
}; 

const addEngineer = () => {
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      teamGenerator();
    })
};   
    

const addIntern = () => {
    inquirer.prompt([{
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?" 
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }
 
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamMembers.push(intern);
    teamGenerator();
  });

};

function htmlGenerator () {
    console.log("Team has been successfully created!")
    fs.writeFile(distPath, createTeam(teamMembers))
}

teamGenerator();