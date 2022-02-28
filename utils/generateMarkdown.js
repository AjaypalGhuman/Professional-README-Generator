// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '![License](https://img.shields.io/badge/License-MIT-blue.svg)',
    ApacheLicense2: '![License](https://img.shields.io/badge/License-Apache-License-2.0-blue.svg)',
    GNUGPLv3: '![License](https://img.shields.io/badge/License-GNU-GPLv3-blue.svg)',
    GNUGPLv2: '![License](https://img.shields.io/badge/License-GNU-GPLv2-blue.svg)',
    BSD3: '![License](https://img.shields.io/badge/License-BSD-3-blue.svg)'

  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.email}
  ${data.github}

`;
};

module.exports = generateMarkdown;
