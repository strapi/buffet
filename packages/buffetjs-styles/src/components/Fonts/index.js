import { createGlobalStyle } from 'styled-components';
import faBrandsLight from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff';
import faBrandsLight2 from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2';
import faRegularLight from '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff';
import faRegularLight2 from '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2';
import faSolidHeavy from '@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff';
import faSolidHeavy2 from '@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2';

/* Lato (normal, italic) */
import latoNormalItalic from '../../assets/fonts/lato/lato-normal-italic/lato-normal-italic.woff';
import latoNormalItalic2 from '../../assets/fonts/lato/lato-normal-italic/lato-normal-italic.woff2';

/* Lato (semibold, normal) */
import latoSemiBold from '../../assets/fonts/lato/lato-semibold/lato-semibold.woff';
import latoSemiBold2 from '../../assets/fonts/lato/lato-semibold/lato-semibold.woff2';

/* Lato (semibold, italic) */
import latoSemiBoldItalic from '../../assets/fonts/lato/lato-semibold-italic/lato-semibold-italic.woff';
import latoSemiBoldItalic2 from '../../assets/fonts/lato/lato-semibold-italic/lato-semibold-italic.woff2';

/* Lato (bold, normal) */
import latoBold from '../../assets/fonts/lato/lato-bold/lato-bold.woff';
import latoBold2 from '../../assets/fonts/lato/lato-bold/lato-bold.woff2';

/* Lato (bold, italic) */
import latoBoldItalic from '../../assets/fonts/lato/lato-bold-italic/lato-bold-italic.woff';
import latoBoldItalic2 from '../../assets/fonts/lato/lato-bold-italic/lato-bold-italic.woff2';

/* Lato Regular */
import latoRegular from '../../assets/fonts/lato/Lato-Regular.ttf';

const Font = createGlobalStyle`
@font-face {
  font-family: 'FontAwesome';
  src: url(${faBrandsLight2}) format("woff2"), url(${faBrandsLight}) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'FontAwesome';
  src: url(${faRegularLight2}) format("woff2"), url(${faRegularLight}) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'FontAwesome';
  src: url(${faSolidHeavy2}) format("woff2"), url(${faSolidHeavy}) format("woff");
  font-weight: 400;
  font-style: normal;
}

/* Lato Regular - 400 */
@font-face {
  font-family: 'Lato';
  src: url(${latoRegular}) format("ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoNormalItalic2}) format("woff2"), url(${latoNormalItalic}) format("woff");
  font-weight: 400;
  font-style: italic;
}

/* Lato Semi-Bold - 500 */
@font-face {
  font-family: 'Lato';
  src: url(${latoSemiBold2}) format("woff2"), url(${latoSemiBold}) format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoSemiBoldItalic2}) format("woff2"), url(${latoSemiBoldItalic}) format("woff");
  font-weight: 500;
  font-style: italic;
}

/* Lato Bold - 600 */
@font-face {
  font-family: 'Lato';
  src: url(${latoBold2}) format("woff2"), url(${latoBold}) format("woff");
  font-weight: 600;
  font-style: normal;
};

@font-face {
  font-family: 'Lato';
  src: url(${latoBoldItalic2}) format("woff2"), url(${latoBoldItalic}) format("woff");
  font-weight: 600;
  font-style: italic;
}`;

export default Font;
