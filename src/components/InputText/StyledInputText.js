/**
 *
 * InputText
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledInputText = styled.input`

  // General style
  width: 100%;
  height: ${sizes.input.height};
  padding: 0 ${sizes.input.padding};
  font-family: 'LatoSemiBold';
  font-size: 13px;
  cursor: pointer;
  outline: 0;
  border: 1px solid ${colors.greyBorder}
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt}
  background-color: ${colors.white};
  
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder}
  }

  // Search with left icon
  ${props =>
    (props.type === 'search' || props.type === 'email') &&
    css`
      padding-left: calc(${sizes.input.height} + ${sizes.input.padding});
    `}}

  // Password with right icon
  ${props =>
    (props.type === 'email' || props.type === 'text') &&
    css`
      padding-right: calc(${sizes.input.height} + ${sizes.input.padding});
    `}}  
`;

StyledInputText.defaultProps = {
  type: 'text',
};

StyledInputText.propTypes = {
  type: PropTypes.string,
};

export default StyledInputText;
