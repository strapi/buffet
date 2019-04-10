/**
 * Combined Generator
 */

/* eslint strict: ["off"] */

'use strict';

const combinedExists = require('../utils/combinedExists');

module.exports = {
  description: 'Add an unconnected combined',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of combined',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return combinedExists(value)
            ? 'A combined with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate {{properCase name}}.js index.js and {{properCase name}}.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './combined/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './combined/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/combined/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../src/combined/{{properCase name}}/tests/{{properCase name}}.test.js',
        templateFile: './combined/test.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/combined/',
    });

    return actions;
  },
};
