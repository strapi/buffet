import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import 'highlight.js/styles/tomorrow-night-bright.css';
import Bash from '../ui/Bash';
import Pre from '../ui/Pre';

const styles = {
  h1: {
    marginBottom: 35,
  },
  h2: { marginTop: 30, marginBottom: 18 },
  spacer: {
    display: 'block',
    marginBottom: 27,
  },
  p: { fontSize: 14 },
  spacerCode: {
    display: 'block',
    marginBottom: 3,
  },
};

function IntroStory() {
  return (
    <div className="story">
      <div className="container">
        <h1 style={styles.h1}>Get started with Buffet.js</h1>
        <section>
          <strong>Using yarn:</strong>
          <span style={styles.spacerCode} />
          <Bash language="Bash">
            yarn add @buffetjs/core @buffetjs/styles prop-types lodash react
            react-dom styled-components
          </Bash>
          <span style={{ ...styles.spacer }} />
          <strong>Using npm:</strong>
          <span style={styles.spacerCode} />
          <Bash language="Bash">
            npm install @buffetjs/core @buffetjs/styles prop-types lodash react
            react-dom styled-components --save
          </Bash>
        </section>
        <section>
          <h2 style={styles.h2}>Setup</h2>
          <strong>
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
import { Fonts, GlobalStyle } from '@buffetjs/styles';

function MyApp() {
  return (
    <>
      <Fonts />
      <GlobalStyle />
      <HomePage />
    </>
  );
}`;

storiesOf('Get Started', module).add('Welcome', () => IntroStory());
