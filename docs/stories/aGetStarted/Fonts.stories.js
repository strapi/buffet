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
        <h1 style={styles.h1}>Using the fonts</h1>

        <section>
          <h2 style={styles.h2}>Setup</h2>
          <strong style={styles.strong}>
            Create Fonts component in your application:
          </strong>
          <span style={styles.spacerCode} />
          <Pre language="javascript">{sourceFonts}</Pre>
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

const sourceFonts = `
import { createGlobalStyle } from 'styled-components';
/* Lato Regular */
import latoRegular from '@buffetjs/styles/webfonts/Lato-Regular.ttf';
import latoRegularWoff from '@buffetjs/styles/webfonts/Lato-Regular.woff';
import latoRegularWoff2 from '@buffetjs/styles/webfonts/Lato-Regular.woff2';
/* Lato SemiBold */
import latoSemiBold from '@buffetjs/styles/webfonts/Lato-SemiBold.ttf';
import latoSemiBoldWoff from '@buffetjs/styles/webfonts/Lato-SemiBold.woff';
import latoSemiBoldWoff2 from '@buffetjs/styles/webfonts/Lato-SemiBold.woff2';
/* Lato Bold */
import latoBold from '@buffetjs/styles/webfonts/Lato-Bold.ttf';
import latoBoldWoff from '@buffetjs/styles/webfonts/Lato-Bold.woff';
import latoBoldWoff2 from '@buffetjs/styles/webfonts/Lato-Bold.woff2';
/* Lato Black */
import latoBlack from '@buffetjs/styles/webfonts/Lato-Black.ttf';
import latoBlackWoff from '@buffetjs/styles/webfonts/Lato-Black.woff';
import latoBlackWoff2 from '@buffetjs/styles/webfonts/Lato-Black.woff2';

const Fonts = createGlobalStyle\`
  /* Lato Regular - 400 */
  @font-face {
    font-family: 'Lato';
    src: url(\${latoRegularWoff2}) format('woff2'), url(\${latoRegularWoff}) format('woff'), url(\${latoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };
  
  /* Lato Semi-Bold - 500 */
  @font-face {
    font-family: 'Lato';
    src: url(\${latoSemiBoldWoff2}) format('woff2'), url(\${latoSemiBoldWoff}) format('woff'), url(\${latoSemiBold}) format('truetype');
    font-weight: 500;
    font-style: normal;
  };
  
  /* Lato Bold - 600 */
  @font-face {
    font-family: 'Lato';
    src: url(\${latoBoldWoff2}) format('woff2'), url(\${latoBoldWoff}) format('woff'), url(\${latoBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  };
  
  /* Lato Black - 900 */
  @font-face {
    font-family: 'Lato';
    src:  url(\${latoBlackWoff2}) format('woff2'), url(\${latoBlackWoff}) format('woff'), url(\${latoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  };
  
\`;


function MyApp() {
  return (
    <>
      <Fonts />
      <HomePage />
    </>
  );
`;

storiesOf('Get Started', module).add('Using the Fonts', () => IntroStory());
