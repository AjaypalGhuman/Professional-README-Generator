// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your Github profile'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description about your project'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license should your project have? (Choose one)',
            choices: ['Apache License 2.0', 'MIT', 'GNU GPLv3', 'GNU GPLv2', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions (if applicable) to run your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information of the repository for the user'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter commands that should be used to run tests'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter any guidelines on how users can further contribute to your repository'
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt();
}

// Function call to initialize app
init();
