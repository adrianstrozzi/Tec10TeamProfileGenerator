const inquirer = require('inquirer');
const fs = require('fs');


const createReadme = ({ title, description, url, author, github, stack, install, email, license, }) =>

  `# <span style="color:skyblue">**${title}**</span>

  ## <span style="color:violet">Table of Contents:</span>

  1. [Description](#Description) 
  2. [Installation](#Installation)
  3. [Stack](#Stack)
  4. [Usage](#Usage)  
  5. [Contributing](#Contributing)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
  9. [Author](#Author)

  ## <span style="color:violet">Description</span>
  
  > ${description}.

  ## <span style="color:violet">Installation</span>

  -${install}

  ## <span style="color:violet">Stack</span>

  <span style="color:skyblue">**-${stack}**</span>
  
  ## <span style="color:violet">Usage</span>
  
  Use this **link** to access the App: [${title}](${url})

  ## <span style="color:violet">Contributing</span>

  Please feel free to contribute to this project by submitting a pull request.

  ## <span style="color:violet">License</span>

  ![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)
  
  ## <span style="color:violet">GitHub</span>
  
  **${author}:** [${github}](${github})

  ## <span style="color:violet">E-mail</span>
  
  **[${email}](${email})**
  
  ## <span style="color:violet">Author</span>
  
  **©2022 ${author}**`;

inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'new',
      message: 'Do you want to create a new profile?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'Please choose the job position:',
      choices: ['Manager', 'Engineer', 'Intern', 'Employee']
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please add a name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please add an email:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please add a github link:',
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please add an office location:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please add a school:',
    },
  ])



  .then((answers) => {

    const readmeContent = createReadme(answers);

    fs.writeFile('./document/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file document folder!')
    );
  });
