import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';
import colors from '../../assets/styles/colors';

const General = createGlobalStyle`
  * { ${mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; height: 100vh; }
  html {
    font-size: 62.5%;
    background-color: ${colors.greyBkgd};
  }
  body {
    margin: 20px 18px;
  }
  p {
    margin: 0;
  }
  a, button {
    cursor: pointer;
    outline: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default General;
