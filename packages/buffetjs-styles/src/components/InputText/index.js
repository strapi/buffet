/**
 *
 * InputText
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const InputText = styled.input`
  // General style
  width: 100%;
  height: ${sizes.input.height};
  padding: 0 ${sizes.input.padding};
  font-weight: ${sizes.input.fontWeight};
  font-size: ${sizes.input.fontSize};
  cursor: text;
  outline: 0;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt};
  background-color: transparent;
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder};
  }

  // Search with left icon
  ${props =>
    (props.type === 'search' || props.type === 'email' || props.icon) &&
    css`
      padding-left: calc(${sizes.input.height} + ${sizes.input.padding});
    `}}

  // Password with right icon
  ${props =>
    props.type === 'password' &&
    css`
      padding-right: calc(${sizes.input.height} + ${sizes.input.padding});
    `}}
`;

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  type: PropTypes.string,
};

export default InputText;
