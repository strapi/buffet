const rootConf = require('../../tools-configuration/eslint.config.js');

module.exports = { ...rootConf, rules: {
  ...rootConf.rules,
  'jest/expect-expect': 0,
  'jest/no-commented-out-tests': 0,
}};
