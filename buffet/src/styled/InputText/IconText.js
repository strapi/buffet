import styled from "styled-components";

import colors from '../../assets/styles/colors';
import Icon from "../Icon";

const IconText = styled(Icon).attrs({
  as: "span",
})`
  background-color: ${colors.greyIconBkgd};
  ::before {
    content: '${props => props.text}';
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default IconText;