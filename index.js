// ES6+ Const declaration block
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');

// Array of Questions for User
// const questions =

inquirer.prompt([
    {
        type : 'input',
        message : 'Project Title?',
        name : 'title',
    },
    {
        type : 'input',
        message : 'Project description?',
        name : 'description',
    },
    {
        type : 'input',
        message : "Installation requirements?",
        name : 'installation',
    },
    {
        type : 'input',
        message : 'How this project can be used?',
        name : 'usage',
    },
    {
        type : 'list',
        message : 'What license fits this project?',
        name : 'license',
        choices : [
            'Apache 2.0',
            'MIT',
            'GPL v3',
            'ISC',
            'BSD 3',
            'None'
        ],
    },
    {
        type : 'input',
        message : 'Who are the contributors?',
        name : 'contributing',
    },
    {
        type : 'input',
        message : 'Command to run a test?',
        name : 'test',
    },
    {
        type : 'input',
        message : 'Your GitHub username?',
        name : 'username',
    },
    {
        type : 'input',
        message : 'Project URL in GitHub?',
        name : 'deployment',
    },
    {
        type : 'input',
        message : 'Your email address?',
        name : 'email',
    }
]);

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', function(err) {
        
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

// Function to initialize program
function init() {

}

// Function call to initialize program
init();
