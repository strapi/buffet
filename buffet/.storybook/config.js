/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from '../src/styled/GlobalStyle';

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

const Global = createGlobalStyle`
// Storybook
.story {
  padding-top: 12px;
  section {
    padding-bottom: ${sizes.margin * 0.9}px;
  }
  section div {
    &.row {
      margin-bottom: ${sizes.margin * 1.8}px;
    }
    &.btn-wrapper {
      display: inline-block;
      width: fit-content;
      margin-bottom: ${sizes.margin * 1.8}px;
      margin-right: ${sizes.margin * 2}px;
      height: ${sizes.button.height.large};
    }
  }
  pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
}
`;

addParameters({
  options: {
    theme: themes.dark,
    showPanel: true,
    panelPosition: 'right',
    sortStoriesByKind: true,
  },
});

addDecorator(withKnobs);
addDecorator(story => (
  <>
    <GlobalStyle />
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
