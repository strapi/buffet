import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';

const General = createGlobalStyle`
  * { ${mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; }
  a, button {
    cursor: pointer;
    outline: 0;
  }
  input {
    max-width: 100% !important;
  }
`;

export default General;
