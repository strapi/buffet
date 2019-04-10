const path = require('path');
const { exec } = require('child_process');
const styledGenerator = require('./styled/index.js');
const componentGenerator = require('./component/index.js');
const combinedGenerator = require('./combined/index.js');

module.exports = plop => {
  plop.setGenerator('styled', styledGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('combined', combinedGenerator);

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
