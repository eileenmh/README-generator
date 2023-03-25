// Node.js Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Register plugin
inquirer.registerPrompt("search-list", require("inquirer-search-list"));

// TODO: Create an array of questions for user input
const licenses = [
  `Apache License 2.0`,
  `GNU General Public License v3.0`,
  `MIT License`,
  `BSD 2-Clause "Simplified" License`,
  `BSD 3-Clause "New" or "Revised" License`,
  `Boost Software License 1.0`,
  `Creative Commons Zero v1.0 Universal`,
  `Eclipse Public License 2.0`,
  `GNU Affero General Public License v3.0`,
  `GNU Lesser General Public License v2.1`,
  `Mozilla Public License 2.0`,
  `The Unlicense`,
];

const questions = inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: `What should the title of your README be?`,
  },
  {
    type: "editor",
    name: "description",
    message: "Write a description of your application.",
    default:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "editor",
    name: "installation",
    message: "Write your application's installation instructions.",
  },
  {
    type: "editor",
    name: "usage",
    message: "Write your application's usage information.",
  },
  {
    type: "search-list",
    name: "license",
    message: "Select a license for your application.",
    choices: licenses,
  },
  {
    type: "editor",
    name: "contribution",
    message: "Write your application's contribution guidelines.",
  },
  {
    type: "editor",
    name: "test",
    message: "Write your application's test instructions.",
  },
  {
    type: "input",
    name: "username",
    message: `What is your GitHub username?`,
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File is created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  questions.then((data) => {
    const content = generateMarkdown(data);
    writeToFile("./output/README.md", content);
  });
}

// Function call to initialize app
init();
