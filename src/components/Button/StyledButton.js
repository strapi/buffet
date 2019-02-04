import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/Colors';
import sizes from '../../assets/styles/Sizes';
import mixins from '../../assets/styles/Mixins';

const StyledButton = styled.button`

  /*
   * Theme
   */

  // General style
  ${mixins().bbox}
  height: ${sizes.button.height.large};
  padding: 0 ${sizes.button.padding.large};
  font-family: 'LatoSemiBold';
  font-size: 13px;
  line-height: 100%;
  border-radius: ${sizes.button.radius};
  cursor:pointer;
  outline: 0;
  &:hover {
    ${mixins(colors.lightGreyAlpha).bshadow}
  }
  &:active {
    ${mixins(colors.lightGreyAlpha).bshadow}
  }

  // Specific style
  ${props =>
    props.color === 'primary' &&
    css`
      background-image: ${colors.blueGradient};
      color: ${colors.white};
      border: 0;
    `}
 
  ${props =>
    props.color === 'secondary' &&
    css`
      border: 1px solid ${colors.darkBlue};
      color: ${colors.darkBlue};
      padding: 0 ${sizes.button.padding.small};
      height: ${sizes.button.height.small};
      line-height: 24px;
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
    `}


  /*
  * Left icons
  */

  // General style
  ${props =>
    !!props.icon &&
    css`
      &::before {
        font-family: 'FontAwesome';
        font-weight: 600;
        font-size: 14px;
        margin-right: 10px;
        line-height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    `}   

  // Icon specified
  ${props =>
    props.icon === 'add' &&
    css`
      &::before {
        content: '\f067';
      }
    `}      

  ${props =>
    props.icon === 'back' &&
    css`
      &::before {
        content: '\f053';
      }
    `}      

  ${props =>
    props.icon === 'trash' &&
    css`
      &::before {
        content: '\f014';
        vertical-align: inherit;
      }
    `}
`;

StyledButton.defaultProps = {
  type: 'button',
  color: 'primary',
};

StyledButton.propTypes = {
  type: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'delete']),
  icon: PropTypes.oneOf(['add', 'back', 'trash']),
};

export default StyledButton;
