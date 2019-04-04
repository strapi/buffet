const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./styled/index.js');

module.exports = plop => {
  plop.setGenerator('styled', componentGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.js',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);

    return folderPath;
  });
};

// module.exports = plop => {
//   plop.setGenerator('component', componentGenerator);
//   plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
//   plop.setActionType('prettify', (answers, config) => {
//     const folderPath = `${path.join(
//       __dirname,
//       '/../../src/',
//       config.path,
//       plop.getHelper('properCase')(answers.name),
//       '**.js',
//     )}`;
//     exec(`npm run prettify -- "${folderPath}"`);

//     return folderPath;
//   });
// }
