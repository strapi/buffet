import styled from 'styled-components';

import Icon from '../Icon';

const IconText = styled(Icon).attrs({
  as: 'span',
})`
  transform: translateY(0);
  ::before {
    content: '${props => props.text}';
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default IconText;
