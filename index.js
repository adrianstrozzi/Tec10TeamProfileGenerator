const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const createHTML = require('./src/createHTML')


const teamMembersArray = [];

const createManager = () => {
  console.log(
    `
    =====================================
    WELCOME TO THE TEAM PROFILE GENERATOR
    =====================================
    `
  );
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the Team Manager Name:',
      validate: inputValidate => {
        if (inputValidate) {
          return true;
        } else {
          console.log("Please enter Manager Name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the Manager's ID:",
      validate: inputValidate => {
        if (isNaN(inputValidate)) {
          console.log("Please enter Manager's ID!")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Manager's email:",
      validate: email => {
        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter Manager's Office Number:",
      validate: inputValidate => {
        if (isNaN(inputValidate)) {
          console.log('Please enter an Office Number!')
          return false;
        } else {
          return true;
        }
      }
    }
  ])
    .then(newManager => {
      const { name, id, email, officeNumber } = newManager;
      const manager = new Manager(name, id, email, officeNumber);

      teamMembersArray.push(manager);
      console.log(manager);
    })
};


const createEmployee = () => {
  console.log(`
  ==============================
  ADD NEW EMPLOYEE FOR YOUR TEAM
  ==============================
  `);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Choose your Employee's Role:",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "Please enter Employee Name:",
      validate: inputValidate => {
        if (inputValidate) {
          return true;
        } else {
          console.log("Please enter an Employee's Name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter Employee's ID:",
      validate: inputValidate => {
        if (isNaN(inputValidate)) {
          console.log("Please enter the employee's ID!")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Employee Email:",
      validate: email => {
        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an Email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter Employee Github User (only include the user name):",
      when: (input) => input.role === "Engineer",
      validate: inputValidate => {
        if (inputValidate) {
          return true;
        } else {
          console.log("Please enter the Employee's Github User!")
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter Intern School:",
      when: (input) => input.role === "Intern",
      validate: inputValidate => {
        if (inputValidate) {
          return true;
        } else {
          console.log("Please enter Intern's School!")
        }
      }
    },
    {
      type: 'confirm',
      name: 'addMoreEmployees',
      message: 'Add more Team Members?',
      default: false
    }
  ])
    .then(employeeData => {

      let { name, id, email, role, github, school, addMoreEmployees } = employeeData;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);

        console.log(employee);

      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamMembersArray.push(employee);

      if (addMoreEmployees) {
        return createEmployee(teamMembersArray);
      } else {
        return teamMembersArray;
      }
    })

};


const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your Team has been successfully created! Please check out index.html file in /dist folder.")
    }
  })
};

createManager()
  .then(createEmployee)
  .then(teamMembersArray => {
    return createHTML(teamMembersArray);
  })
  .then(newHTMLPage => {
    return writeFile(newHTMLPage);
  })
  .catch(err => {
    console.log(err);
  });