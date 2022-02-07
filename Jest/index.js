const fs = require('fs');

function findTestTXT() {
  const files = fs.readdirSync('./');
  return files.some((f) => f === 'test.txt');
}

module.exports = { findTestTXT };