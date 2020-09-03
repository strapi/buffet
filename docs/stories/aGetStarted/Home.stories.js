import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import 'highlight.js/styles/tomorrow-night-bright.css';
import Bash from '../ui/Bash';
import Pre from '../ui/Pre';

const styles = {
  h1: {
    marginBottom: 35,
    fontWeight: 600,
  },
  h2: { marginTop: 30, marginBottom: 18, fontWeight: 600 },
  spacer: {
    display: 'block',
    marginBottom: 27,
  },
  p: { fontSize: 14 },
  spacerCode: {
    display: 'block',
    marginBottom: 3,
  },
  strong: {
    fontWeight: 600,
  },
};

function IntroStory() {
  return (
    <div className="story">
      <div className="container">
        <h1 style={styles.h1}>Get started with Buffet.js</h1>
        <section>
          <strong style={styles.strong}>Using yarn:</strong>
          <span style={styles.spacerCode} />
          <Bash language="Bash">
            yarn add @buffetjs/core @buffetjs/hooks @buffetjs/styles prop-types
            lodash react react-dom styled-components
          </Bash>
          <span style={{ ...styles.spacer }} />
          <strong style={styles.strong}>Using npm:</strong>
          <span style={styles.spacerCode} />
          <Bash language="Bash">
            npm install @buffetjs/core @buffetjs/hooks @buffetjs/styles
            prop-types lodash react react-dom styled-components --save
          </Bash>
        </section>
        <section>
          <h2 style={styles.h2}>Setup</h2>
          <strong style={styles.strong}>
            Import the GlobalStyles and the Fonts in your application:
          </strong>
          <span style={styles.spacerCode} />
          <Pre language="javascript">{source}</Pre>
        </section>
      </div>
    </div>
  );
}

const source = `
import { GlobalStyle } from '@buffetjs/styles';

function MyApp() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}`;

storiesOf('Get Started', module).add('Welcome', () => IntroStory());
