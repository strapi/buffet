/**
 * combinedExists
 *
 * Check whether the given combined exist in either the combined directory
 */

const fs = require('fs');
const path = require('path');

const combined = fs.readdirSync(path.join(__dirname, '../../../src/combined'));

function combinedExists(comp) {
  return combined.indexOf(comp) >= 0;
}

module.exports = combinedExists;
