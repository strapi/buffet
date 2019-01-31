import { createGlobalStyle } from 'styled-components';

import fontawesome from '../../assets/fonts/fontawesome/fontawesome-webfont.woff';
import fontawesome2 from '../../assets/fonts/fontawesome/fontawesome-webfont.woff2';

export default createGlobalStyle`
@font-face {
  font-family: 'FontAwesome';
  src: url(${fontawesome2}) format("woff2"), url(${fontawesome}) format("woff");
  font-weight: normal;
  font-style: normal;
}`;
