const generatePassword = require('generate-password');

// Function to generate and log a random password
function generateRandomPassword() {
  const password = generatePassword.generate();
  console.log(password);
}

// Call the function
generateRandomPassword();