import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Wrapper = styled.div`
  padding-top: ${sizes.margin * 1.1}px;
  padding-bottom: ${sizes.margin * 1.4}px;
  color: ${colors.red};
  font-size: 13px;
  font-family: 'Lato';
  span {
    display: inline-box;
  }
`;

export default Wrapper;
