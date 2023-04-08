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

class Question {
  constructor(type, name, message, optional) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
}

class optionalQuestion extends Question {
  constructor(type, name, message) {
    super(type, name, message);
    this.when = (answers) => {
      const sections = answers.selectSections.map((section) =>
        section.toLowerCase()
      );
      return sections.includes(this.name);
    };
  }
}

// Questions
const title = new Question(
  "input",
  "title",
  "What should the title of your README be?"
);
const description = new Question(
  "editor",
  "description",
  "Provide a short description explaining the what, why, and how of your project."
);

const selectSections = new Question(
  "checkbox",
  "selectSections",
  "Select which sections you want to include in your readme."
);
selectSections.choices = [
  `Installation`,
  `Usage`,
  `License`,
  `Contribution`,
  `Test`,
];
const installation = new optionalQuestion(
  "editor",
  "installation",
  "Write your application's installation instructions.",
  true
);
const usage = new optionalQuestion(
  "editor",
  "usage",
  "Write your application's usage information."
);
const license = new optionalQuestion(
  "search-list",
  "license",
  "Select a license for your application."
);
license.choices = licenses;

const contribution = new optionalQuestion(
  "editor",
  "contribution",
  "Write your application's contribution guidelines."
);

const test = new optionalQuestion(
  "editor",
  "test",
  "Write your application's test instructions."
);

const username = new Question(
  "input",
  "username",
  "What is your GitHub username?"
);

const email = new Question("input", "email", "What is your email address?");

const Questions = [
  title,
  description,
  selectSections,
  installation,
  usage,
  license,
  contribution,
  test,
  username,
  email,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("Done! Your readme file is saved in the output folder.")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(Questions).then((data) => {
    const content = generateMarkdown(data);
    writeToFile("./output/README.md", content);
  });
}

// Function call to initialize app
init();
