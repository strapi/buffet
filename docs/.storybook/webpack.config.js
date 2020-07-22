const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const packagesPath = path.resolve(__dirname, '../../packages');
const packages = fs
  .readdirSync(packagesPath)
  .filter(f => fs.statSync(path.join(packagesPath, f)).isDirectory());

console.log(packages);

module.exports = async ({ config }, configType) => {
  // config.resolve.mainFields = ['main'];

  // config.module.rules[0].exclude = /(node_modules|build|lib)/;

  // storybookBaseConfig.resolve.alias = {};
  // packages.forEach(function(package) {
  //   config.resolve.alias[`@buffetjs/${package.split('-')[1]}$`] = path.resolve(
  //     __dirname,
  //     `../../packages/${package}/src`
  //   );
  // });

  return config;
};
