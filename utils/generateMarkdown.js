// Function to generate markdown for README
function generateMarkdown(data) {
  // const declaration for GitHub badge and user's profile pic
  const gitHubBadge = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  const profilePic = `https://github.com/${data.username}.png?size=120`;
  
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To run this application you will need to install: ${data.installation}

  ## Usage
  How this application can be used: ${data.usage}

  ## License
    ${data.license}

  ## Contributing
    ${data.contributing}

  ## Tests
  Use this command to run a test: ${data.tests}

  ## Questions
  \n ![GitHub Badge](${gitHubBadge})
  \n ![Profile Pic](${profilePic})
  \n Deployed application: ${data.deployment}
  \n For further questions, please contact the author at: ${data.email}
`;
};

// Using module.exports object to index.js
module.exports = generateMarkdown;
