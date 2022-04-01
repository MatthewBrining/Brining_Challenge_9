// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'Blah':
      return 'look junk up later';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   - ${data.description}

  ## Author
   - ${data.author}

  ## Email
   - ${data.email}

  ## Github
   - ${data.github}

  ## License
   - [${data.license}](${renderLicenseLink})
`;
}
//I can expand on this later

module.exports = generateMarkdown;
