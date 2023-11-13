const bcrypt = require('bcrypt');

// Function for hashing a password
async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Function for comparing a password to its hash
async function comparePassword(password, dbPassword) {
  const isMatch = await bcrypt.compare(password, dbPassword);
  return isMatch;
}

module.exports = {
  hashPassword,
  comparePassword,
};