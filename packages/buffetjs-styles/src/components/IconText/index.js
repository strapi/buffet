import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

import IconWrapper from '../IconWrapper';

const IconText = styled(IconWrapper)`
  z-index: 3;
  transform: translateY(0);
  ::before {
    content: '${props => props.text}';
    font-family: Lato;
    font-size: 16px;
    font-weight: ${sizes.fontWeight.bold};
  }
`;

export default IconText;
