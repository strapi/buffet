/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';

const Button = styled.button`

  /*
  * Theme
  */

  // General style
  height: ${sizes.button.height.large};
  padding: 0 ${sizes.button.padding};
  font-weight: 500;
  font-size: 1.3rem;
  line-height: normal;
  border-radius: ${sizes.borderRadius};
  cursor: pointer;
  outline: 0;
  background-color: ${colors.white};
  &:hover {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }
  &:active {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }
  &:focus {
    outline: 0;
  }

  > svg {
    margin-right: 10px;
    vertical-align: initial;
  }

  // Specific style
  ${({ color }) =>
    color !== 'none' &&
    `
      background-color: ${colors.button[color].backgroundColor};
      border: 1px solid ${colors.button[color].borderColor};
      color: ${colors.button[color].color};
    `}

  ${({ disabled }) =>
    disabled &&
    `
      background-color: ${colors.button.disabled.backgroundColor};
      border: 1px solid ${colors.button.disabled.borderColor};
      color: ${colors.button.disabled.color};
      &:hover {
        box-shadow: none;
        cursor: initial;
      }
    `}

  ${({ color }) =>
    color === 'success' &&
    `
      min-width: ${sizes.button.minWidth.small};
    `}
`;

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
    'none',
  ]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
