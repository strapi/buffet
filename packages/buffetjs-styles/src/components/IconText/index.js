import styled from 'styled-components';

import IconWrapper from '../IconWrapper';

const IconText = styled(IconWrapper)`
  transform: translateY(0);
  ::before {
    content: '${props => props.text}';
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default IconText;
