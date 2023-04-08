const licenses = [
  {
    name: `Apache License 2.0`,
    link: `https://www.apache.org/licenses/LICENSE-2.0`,
    badge: `https://img.shields.io/badge/License-Apache_2.0-blue.svg`,
  },
  {
    name: `GNU General Public License v3.0`,
    link: `https://www.gnu.org/licenses/gpl-3.0.en.html`,
    badge: `https://img.shields.io/badge/License-GPLv3-blue.svg`,
  },
  {
    name: `MIT License`,
    link: `https://opensource.org/license/mit/`,
    badge: `https://img.shields.io/badge/License-MIT-yellow.svg`,
  },
  {
    name: `BSD 2-Clause "Simplified" License`,
    link: `https://opensource.org/license/bsd-2-clause/`,
    badge: `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`,
  },
  {
    name: `BSD 3-Clause "New" or "Revised" License`,
    link: `https://opensource.org/license/bsd-3-clause/`,
    badge: `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`,
  },
  {
    name: `Boost Software License 1.0`,
    link: `https://www.boost.org/LICENSE_1_0.txt`,
    badge: `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`,
  },
  {
    name: `Creative Commons Zero v1.0 Universal`,
    link: `https://creativecommons.org/publicdomain/zero/1.0/`,
    badge: `https://licensebuttons.net/l/zero/1.0/80x15.png`,
  },
  {
    name: `Eclipse Public License 2.0`,
    link: `https://www.eclipse.org/legal/epl-2.0/`,
    badge: `https://img.shields.io/badge/License-EPL_1.0-red.svg`,
  },
  {
    name: `GNU Affero General Public License v3.0`,
    link: `https://www.gnu.org/licenses/agpl-3.0.en.html`,
    badge: `https://img.shields.io/badge/License-AGPL_v3-blue.svg`,
  },
  {
    name: `GNU Lesser General Public License v2.1`,
    link: `https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html`,
    badge: `https://img.shields.io/badge/License-LGPL_v2.1-blue.svg`,
  },
  {
    name: `Mozilla Public License 2.0`,
    link: `https://www.mozilla.org/en-US/MPL/2.0/`,
    badge: `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`,
  },
  {
    name: `The Unlicense`,
    link: `https://unlicense.org/`,
    badge: `https://img.shields.io/badge/license-Unlicense-blue.svg`,
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var filteredLicense = licenses.find((obj) => obj.name === license);
  return license ? filteredLicense.badge : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var filteredLicense = licenses.find((obj) => obj.name === license);
  return license ? filteredLicense.link : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
    ? `This app is licensed under the **[${license}](${renderLicenseLink(
        license
      )})**.`
    : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const content =
    `# ${data.title}
## Description
${data.description}
## Table of Contents${"\n"}` +
    (data.installation ? `- [Installation](#installation)${"\n"}` : "") +
    (data.usage ? `- [Usage](#usage)${"\n"}` : "") +
    (data.license ? `- [License](#license)${"\n"}` : "") +
    (data.contribution ? `- [Contributing](#contributing)${"\n"}` : "") +
    (data.test ? `- [Tests](#tests)${"\n"}` : "") +
    `- [Questions](#questions)${"\n" + "\n"}` +
    (data.installation
      ? `## Installation${"\n" + data.installation + "\n" + "\n"}`
      : "") +
    (data.usage ? `## Usage${"\n" + data.usage + "\n" + "\n"}` : "") +
    (data.license ? `## License${"\n" + data.license + "\n" + "\n"}` : "") +
    (data.contribution
      ? `## Contributing${"\n" + data.contribution + "\n" + "\n"}`
      : "") +
    (data.test ? `## Tests${"\n" + data.test + "\n" + "\n"}` : "") +
    `## Questions
If you have a question about this project, you can reach [${data.username}](https://github.com/${data.username}) by sending an email to ${data.email}.`;

  return content;
}

module.exports = generateMarkdown;
