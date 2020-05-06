/**
 *
 * Links
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: transparent;
    border: 0;
    outline: 0;
    color: ${colors.blueTxt};
    svg {
      font-size: 10px;
      color: ${colors.blueTxt};
    }
  }
`;

export default Links;
