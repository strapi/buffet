/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from '../src/styled/GlobalStyle';

addParameters({
  options: {
    theme: themes.dark,
    showPanel: true,
    panelPosition: 'right',
    sortStoriesByKind: true,
  },
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
