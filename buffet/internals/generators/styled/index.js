/**
 * Styled Generator
 */

/* eslint strict: ["off"] */

'use strict';

const styledcomponentExists = require('../utils/styledcomponentExists');

module.exports = {
  description: 'Add an unconnected styled component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return styledcomponentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    // Generate {{properCase name}}.js index.js and {{properCase name}}.test.js

    const actions = [
      {
        type: 'add',
        path: '../../src/styled/{{properCase name}}/index.js',
        templateFile: './styled/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../src/styled/{{properCase name}}/tests/{{properCase name}}.test.js',
        templateFile: './styled/test.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/styled/',
    });

    return actions;
  },
};
