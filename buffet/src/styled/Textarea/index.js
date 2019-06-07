/**
 *
 * Textarea
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledTextarea = styled.textarea`
  width: 100%;
  height: calc(${sizes.input.height} * 4);
  padding: ${sizes.input.padding} ${sizes.input.padding};
  font-weight: ${sizes.input.fontWeight};
  font-size: ${sizes.input.fontSize};
  cursor: pointer;
  outline: 0;
  border: 1px solid ${colors.lightGrey}
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt};
  background-color: ${colors.white};
  line-height: 18px;
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder};
  }
`;

export default StyledTextarea;
