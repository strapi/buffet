const rootConf = require('../../tools-configuration/eslint.config.js');

module.exports = { ...rootConf, rules: {
  ...rootConf.rules,
  'react/self-closing-comp': 0,
}};
