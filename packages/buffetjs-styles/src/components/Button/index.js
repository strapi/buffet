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

const buttonsColors = {
  primary: {
    borderColor: colors.blue,
    color: colors.white,
    backgroundColor: colors.blue,
  },
  secondary: {
    borderColor: colors.blue,
    color: colors.blue,
    backgroundColor: colors.white,
  },
  cancel: {
    borderColor: colors.brightGrey,
    color: colors.brightGrey,
    backgroundColor: 'transparent',
  },
  delete: {
    borderColor: colors.orange,
    color: colors.white,
    backgroundColor: colors.orange,
  },
  success: {
    borderColor: colors.green,
    color: colors.white,
    backgroundColor: colors.green,
  },
};

const Button = styled.button`

  /*
  * Theme
  */

  // General style
  height: ${sizes.button.height.large};
  padding: 0 ${sizes.button.padding.large};
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

  &:disabled {
    &:hover {
      box-shadow: none;
      cursor: initial;
    }
  }

  // Specific style
  ${({ color }) =>
    color !== 'none' &&
    `
      background-color: ${buttonsColors[`${color}`].backgroundColor};
      color: ${buttonsColors[`${color}`].color};
      border: 1px solid ${buttonsColors[`${color}`].borderColor};
    `}

  ${({ color }) =>
    color !== 'cancel' &&
    color !== 'none' &&
    `
      &:disabled {
        border: 1px solid ${colors.greyDisabledBkgd};
        background-color: ${colors.greyDisabledBkgd};
        color: ${colors.greyDisabledColor};
      }
    `}

  ${({ color }) =>
    color === 'delete' &&
    `
      padding: 0 ${sizes.button.padding.small};
      
    `}

  ${({ color }) =>
    color === 'success' &&
    `
      min-width: ${sizes.button.minWidth.small};
    `}

`;

Button.defaultProps = {
  color: 'primary',
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
  type: PropTypes.string,
};

export default Button;
export { buttonsColors };
