# Professional README Generator

For this week's challenge, we were asked to create a command-line application that generates a README file. It is built with Node.js, and uses Inquirer.js to prompt the user for information about their application repository in the terminal. After asking for the title and a description, the application gives the user a list of optional sections, so that sections that aren't necessary can be left unchecked and excluded from the final output. After answering all of the questions in the command line, the application writes the README file to the 'output' folder. If a license is selected, that license's badge is included at the top of the README.

The following is a demo of how the application works:
https://drive.google.com/file/d/17mULQPoGfLMCMCY1CHz90Xutzz1sbXHq/view

## Acceptance Criteria
We were provided with the following acceptance criteria:
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Installation

- Download [Node.js](https://nodejs.dev/en/download/). To verify the installation and check for npm, run the following commands in your terminal:
```
Node --version
npm --version
```
- Download the code for the application from [the repository](https://github.com/eileenmh/README-generator) as a .zip file and then open it, or clone the repository.
- Next you'll need to install the packages listed in package.json by opening the terminal, changing the directory to the application's root, and then running:
```
npm install
``` 
This will download the packages necessary to run the application.


## Usage Information
Make sure you've followed the installation steps before using the app.
To run the application enter the following command while you are in the application's root directory:
```
node index.js
```
This will start the prompts for what to put in the README. Once you've answered all of the questions, you'll find the README in the 'output' folder.

## Built With

## Credits

- Project prompt provided by [UNC Coding Bootcamp](https://bootcamp.unc.edu/coding/) with [started code](https://github.com/coding-boot-camp/potential-enigma)
- Created by Eileen Harvey ([@eileenmh](https://github.com/eileenmh))
- Badges sourced from [Shields.io](https://shields.io/) with guidance from [lukas-h/license-badge.md](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)