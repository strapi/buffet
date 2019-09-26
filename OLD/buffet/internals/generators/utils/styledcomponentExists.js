/**
 * styledExists
 *
 * Check whether the given styled component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const styledcomponents = fs.readdirSync(
  path.join(__dirname, '../../../src/styled'),
);

function styledcomponentExists(comp) {
  return styledcomponents.indexOf(comp) >= 0;
}

module.exports = styledcomponentExists;
