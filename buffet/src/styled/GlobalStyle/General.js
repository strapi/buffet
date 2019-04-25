import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';

const General = createGlobalStyle`
  * { ${mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; }
  html {
    font-size: 62.5%;
  }
  a, button {
    cursor: pointer;
    outline: 0;
  }
  p, input, label, button {
    font-family: 'Lato';
  }
`;

export default General;
