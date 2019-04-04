import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Small = styled.small`
  color: ${colors.darkGrey};
  font-family: 'Lato';
  font-size: 12px;
  ${({ children, error }) => {
    let css = `display: inline-block;`;

    if (children) {
      css = `
        margin-top: ${sizes.margin * 1.2}px; 
        display: inline-block; 
        margin-bottom: 13px
      `;
    }

    if (!!error && children) {
      css = `
        margin-top: ${sizes.margin * 1.2}px;  
        display: inline-block;
      `;
    }

    return css;
  }}
`;

export default Small;
