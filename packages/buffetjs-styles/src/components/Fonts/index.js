import { createGlobalStyle } from 'styled-components';

/* Lato (hairline, normal) */
import latoHairline from '../../assets/fonts/lato/lato-hairline/lato-hairline.woff';
import latoHairline2 from '../../assets/fonts/lato/lato-hairline/lato-hairline.woff2';

/* Lato (hairline, italic) */
import latoHairlineItalic from '../../assets/fonts/lato/lato-hairline-italic/lato-hairline-italic.woff';
import latoHairlineItalic2 from '../../assets/fonts/lato/lato-hairline-italic/lato-hairline-italic.woff2';

/* Lato (thin, normal) */
import latoThin from '../../assets/fonts/lato/lato-thin/lato-thin.woff';
import latoThin2 from '../../assets/fonts/lato/lato-thin/lato-thin.woff2';

/* Lato (thin, italic) */
import latoThinItalic from '../../assets/fonts/lato/lato-thin-italic/lato-thin-italic.woff';
import latoThinItalic2 from '../../assets/fonts/lato/lato-thin-italic/lato-thin-italic.woff2';

/* Lato (light, normal) */
import latoLight from '../../assets/fonts/lato/lato-light/lato-light.woff';
import latoLight2 from '../../assets/fonts/lato/lato-light/lato-light.woff2';

/* Lato (light, italic) */
import latoLightItalic from '../../assets/fonts/lato/lato-light-italic/lato-light-italic.woff';
import latoLightItalic2 from '../../assets/fonts/lato/lato-light-italic/lato-light-italic.woff2';

/* Lato (normal, normal) */
import latoNormal from '../../assets/fonts/lato/lato-normal/lato-normal.woff';
import latoNormal2 from '../../assets/fonts/lato/lato-normal/lato-normal.woff2';

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

/* Lato (heavy, normal) */
import latoHeavy from '../../assets/fonts/lato/lato-heavy/lato-heavy.woff';
import latoHeavy2 from '../../assets/fonts/lato/lato-heavy/lato-heavy.woff2';

/* Lato (heavy, italic) */
import latoHeavyItalic from '../../assets/fonts/lato/lato-heavy-italic/lato-heavy-italic.woff';
import latoHeavyItalic2 from '../../assets/fonts/lato/lato-heavy-italic/lato-heavy-italic.woff2';

/* Lato (black, normal) */
import latoBlack from '../../assets/fonts/lato/lato-black/lato-black.woff';
import latoBlack2 from '../../assets/fonts/lato/lato-black/lato-black.woff2';

/* Lato (black, italic) */
import latoBlackItalic from '../../assets/fonts/lato/lato-black-italic/lato-black-italic.woff';
import latoBlackItalic2 from '../../assets/fonts/lato/lato-black-italic/lato-black-italic.woff2';

const Font = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  src: url(${latoHairline2}) format("woff2"), url(${latoHairline}) format("woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoHairlineItalic2}) format("woff2"), url(${latoHairlineItalic}) format("woff");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoThin2}) format("woff2"), url(${latoThin}) format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoThinItalic2}) format("woff2"), url(${latoThinItalic}) format("woff");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoLight2}) format("woff2"), url(${latoLight}) format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoLightItalic2}) format("woff2"), url(${latoLightItalic}) format("woff");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoNormal2}) format("woff2"), url(${latoNormal}) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoNormalItalic2}) format("woff2"), url(${latoNormalItalic}) format("woff");
  font-weight: 400;
  font-style: italic;
}

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
}

@font-face {
  font-family: 'Lato';
  src: url(${latoHeavy2}) format("woff2"), url(${latoHeavy}) format("woff");
  font-weight: 800;
  font-style: normal;
};

@font-face {
  font-family: 'Lato';
  src: url(${latoHeavyItalic2}) format("woff2"), url(${latoHeavyItalic}) format("woff");
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'Lato';
  src: url(${latoBlack2}) format("woff2"), url(${latoBlack}) format("woff");
  font-weight: 900;
  font-style: normal;
};

@font-face {
  font-family: 'Lato';
  src: url(${latoBlackItalic2}) format("woff2"), url(${latoBlackItalic}) format("woff");
  font-weight: 900;
  font-style: italic;
}`;

export default Font;
