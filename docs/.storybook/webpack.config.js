// const fs = require('fs');
// const path = require('path');
// const webpack = require('webpack');

// const packagesPath = path.resolve(__dirname, '../../packages');
// const packages = fs
//   .readdirSync(packagesPath)
//   .filter(f => fs.statSync(path.join(packagesPath, f)).isDirectory());

module.exports = async ({ config }, configType) => {
  // TODO
  // if (process.env.NODE_ENV === 'development') {
  //   packages.forEach(function(package) {
  //     config.resolve.alias[
  //       `@buffetjs/${package.split('-')[1]}$`
  //     ] = path.resolve(
  //       __dirname,
  //       `../../packages/${package}/build/esm/index.js`
  //     );
  //   });
  // }

  return config;
};
