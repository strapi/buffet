import { createGlobalStyle } from 'styled-components';

import fontawesome from '../../assets/fonts/fontawesome/fontawesome-webfont.woff';
import fontawesome2 from '../../assets/fonts/fontawesome/fontawesome-webfont.woff2';

import latoLight from '../../assets/fonts/lato/lato-light/lato-light.woff';
import latoLight2 from '../../assets/fonts/lato/lato-light/lato-light.woff2';

import latoRegular from '../../assets/fonts/lato/lato-normal/lato-normal.woff';
import latoRegular2 from '../../assets/fonts/lato/lato-normal/lato-normal.woff2';

import latoMedium from '../../assets/fonts/lato/lato-medium/lato-medium.woff';
import latoMedium2 from '../../assets/fonts/lato/lato-medium/lato-medium.woff2';

import latoSemiBold from '../../assets/fonts/lato/lato-semibold/lato-semibold.woff';
import latoSemiBold2 from '../../assets/fonts/lato/lato-semibold/lato-semibold.woff2';

import latoBold from '../../assets/fonts/lato/lato-bold/lato-bold.woff';
import latoBold2 from '../../assets/fonts/lato/lato-bold/lato-bold.woff2';

const Font = createGlobalStyle`
@font-face {
  font-family: 'FontAwesome';
  src: url(${fontawesome2}) format("woff2"), url(${fontawesome}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoLight';
  src: url(${latoLight2}) format("woff2"), url(${latoLight}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoRegular';
  src: url(${latoRegular2}) format("woff2"), url(${latoRegular}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoMedium';
  src: url(${latoMedium2}) format("woff2"), url(${latoMedium}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoSemiBold';
  src: url(${latoSemiBold2}) format("woff2"), url(${latoSemiBold}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoBold';
  src: url(${latoBold2}) format("woff2"), url(${latoBold}) format("woff");
  font-weight: normal;
  font-style: normal;
}`;

export default Font;
