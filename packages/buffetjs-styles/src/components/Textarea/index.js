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
  height: 19.1rem;
  padding: ${sizes.textarea.padding} ${sizes.input.padding};
  font-weight: ${sizes.fontWeight.regular};
  font-size: ${sizes.input.fontSize};
  outline: 0;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${sizes.borderRadius};
  color: ${colors.blueTxt};
  background-color: ${colors.white};
  line-height: 18px;
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder};
  }
  &:disabled {
    background-color: ${colors.greyIconBkgd};
    cursor: not-allowed;
    color: ${colors.brightGrey};
  }
`;

export default StyledTextarea;
