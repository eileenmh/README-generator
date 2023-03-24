// Node.js Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Register plugin
inquirer.registerPrompt("search-list", require("inquirer-search-list"));

// TODO: Create an array of questions for user input
const licenses = [
  { title: `Academic Free License v3.0`, keyword: `afl-3.0` },
  { title: `Apache license 2.0`, keyword: `apache-2.0` },
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
    choices: licenses.map((license) => ({
      name: license.title,
      value: license,
    })),
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
