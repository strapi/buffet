/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Fonts, GlobalStyle } from '@buffetjs/styles';
import Global from '../stories/ui/Global';

const sizes = {
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  margin: '10',
  radius: '3px',
  button: {
    height: {
      small: '26px',
      large: '30px',
    },
    padding: {
      small: '15px',
      large: '30px',
    },
  },
  input: {
    height: '3.4rem',
    padding: '1rem',
    fontWeight: 400,
  },
  checkbox: {
    height: '14px',
    width: '14px',
  },
  timepicker: {
    list: {
      height: '144px',
    },
  },
  table: {
    header: {
      height: '41px',
    },
    deleteRow: {
      height: '37px',
    },
  },
};

export default sizes;

addParameters({
  options: {
    theme: themes.dark,
    showPanel: true,
    panelPosition: 'right',
    sortStoriesByKind: true,
    panelPosition: 'bottom',
  },
});

addDecorator(withKnobs);
addDecorator(story => (
  <>
    <GlobalStyle />
    <Fonts />
    <Global />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
