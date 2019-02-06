import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import GlobalStyles from '../src/components/GlobalStyles';

addDecorator(story => (
  <React.Fragment>
    <GlobalStyles />
    {story()}
  </React.Fragment>
));
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
