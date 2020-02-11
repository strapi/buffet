import { createGlobalStyle } from 'styled-components';
import faBrandsLight from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff';
import faBrandsLight2 from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2';
import faRegularLight from '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff';
import faRegularLight2 from '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2';
import faSolidHeavy from '@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff';
import faSolidHeavy2 from '@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2';

/* Lato Regular */
import latoRegular from '../../assets/fonts/lato/Lato-Regular.ttf';

/* Lato SemiBold */
import latoSemiBold from '../../assets/fonts/lato/Lato-SemiBold.ttf';

/* Lato Bold */
import latoBold from '../../assets/fonts/lato/Lato-Bold.ttf';

/* Lato Black */
import latoBlack from '../../assets/fonts/lato/Lato-Black.ttf';

const Font = createGlobalStyle`
@font-face {
  font-family: 'FontAwesome';
  src: url(${faBrandsLight2}) format("woff2"), url(${faBrandsLight}) format("woff");
  font-weight: 400;
  font-style: normal;
};

@font-face {
  font-family: 'FontAwesome';
  src: url(${faRegularLight2}) format("woff2"), url(${faRegularLight}) format("woff");
  font-weight: 400;
  font-style: normal;
};

@font-face {
  font-family: 'FontAwesome';
  src: url(${faSolidHeavy2}) format("woff2"), url(${faSolidHeavy}) format("woff");
  font-weight: 400;
  font-style: normal;
};

/* Lato Regular - 400 */
@font-face {
  font-family: 'Lato';
  src: url(${latoRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
};

/* Lato Semi-Bold - 500 */
@font-face {
  font-family: 'Lato';
  src: url(${latoSemiBold}) format('truetype');
  font-weight: 500;
  font-style: normal;
};

/* Lato Bold - 600 */
@font-face {
  font-family: 'Lato';
  src: url(${latoBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
};

/* Lato Black - 900 */
@font-face {
  font-family: 'Lato';
  src: url(${latoBlack}) format('truetype');
  font-weight: 900;
  font-style: normal;
};`;

export default Font;
