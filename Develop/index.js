// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please enter a brief description.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Please enter the name of the author.',
        name: 'author',
        default: 'Matthew Brining',
    },

    {
        type: 'input',
        message: 'Please enter your email.',
        name: 'email',
        default: 'matthewbrining@gmail.com',
    },

    {
        type: 'input',
        message: 'Please enter your github account name.',
        name: 'github',
        default: 'MatthewBrining',
    },

    {
        type: 'list',
        message: 'What license was used?',
        name: 'license',
        choices: ['MIT','Blah']
    },

];
 inquirer.prompt(questions).then(writeToFile);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./README.md",generateMarkdown(data));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile);
};

// Function call to initialize app
init();