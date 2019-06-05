import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import 'react-highlight/node_modules/highlight.js/styles/tomorrow-night-bright.css';
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
            yarn add buffetjs lodash react react-dom styled-components
          </Bash>
          <span style={{ ...styles.spacer }} />
          <strong>Using npm:</strong>
          <span style={styles.spacerCode} />
          <Bash language="Bash">
            npm install buffetjs lodash react react-dom styled-components --save
          </Bash>
        </section>
        <section>
          <h2 style={styles.h2}>Setup</h2>
          <strong>
            Import the GlobalStyles and the Fonts in your application:
          </strong>
          <span style={styles.spacerCode} />
          <Pre language="javascript">
            {`
import { Fonts, GlobalStyles } from 'buffetjs';

function MyApp() {
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <HomePage />
    </>
  );
}`}
          </Pre>
        </section>
      </div>
    </div>
  );
}

storiesOf('Get Started', module).add('Welcome', () => IntroStory());
