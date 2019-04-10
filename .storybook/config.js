/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import GlobalStyle from '../src/styled/GlobalStyle';

addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
));
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
