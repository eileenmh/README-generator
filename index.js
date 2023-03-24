// Node.js Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [`What is the title of your README?`];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
  let fileName = "Example.md";
  let data = "Here's some text";

  writeToFile(fileName, data);
}

// Function call to initialize app
init();
