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
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      -webkit-transition: "color 9999s ease-out, 
      background-color 9999s ease-out";
      -webkit-transition-delay: 9999s;
  }
`;

export default General;
