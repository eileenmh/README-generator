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
    default: `Untitled`,
  },
  {
    type: "search-list",
    name: "license",
    message: "Select a license for your application.",
    choices: licenses,
  },
  {
    type: "input",
    name: "username",
    message: `What is your GitHub username?`,
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
  let fileName = "Example.md";
  let fileText = "Here's some text";

  questions.then((data) => {
    console.log(data);
    writeToFile(fileName, fileText);
  });
}

// Function call to initialize app
init();
