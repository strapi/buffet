/**
 *
 * Button
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';
import img from '../../assets/icons/icon_trash.svg';

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
  border-radius: ${sizes.radius};
  cursor: pointer;
  outline: 0;
  background-color: ${colors.white};
  &:hover {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }
  &:active {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }

  // Specific style
  ${props =>
    props.color === 'primary' &&
    css`
      background-image: ${colors.blueGradient};
      color: ${colors.white};
      border: 0;
      ${props.icon &&
        css`
          &::before {
            content: '\f067';
            margin-right: ${sizes.margin * 1.3}px;
          }
        `}
    `}

  ${props =>
    props.color === 'secondary' &&
    css`
      border: 1px solid ${colors.darkBlue};
      color: ${colors.darkBlue};
      padding: 0 ${sizes.button.padding.small};
      height: ${sizes.button.height.small};
      ${props.icon &&
        css`
          &::before {
            content: '\f067';
            margin-right: ${sizes.margin * 1.3}px;
          }
        `}
    `}}

  ${props =>
    props.color === 'cancel' &&
    css`
      border: 1px solid ${colors.mediumGrey};
      color: ${colors.mediumGrey};
    `}}

  ${props =>
    props.color === 'delete' &&
    css`
      border: 1px solid ${colors.orangeBorder};
      background-color: ${colors.orangeBkgd};
      color: ${colors.darkOrange};
      padding: 0 ${sizes.button.padding.small};
      ${props.icon &&
        css`
          &::before {
            content: '';
            vertical-align: middle;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-position: top left;
            width: 11px;
            height: 16px;
          }
        `}
    `}

  /*
  * Left icons
  */

  // General style
  ${props =>
    props.icon &&
    css`
      &::before {
        font-family: 'FontAwesome';
        font-weight: 600;
        font-size: 1.3rem;
        margin-right: 8px;
        display: inline-block;
      }
    `}
`;

Button.defaultProps = {
  color: 'primary',
  icon: false,
  type: 'button',
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'delete']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.string,
};

export default Button;
