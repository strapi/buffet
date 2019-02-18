import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledIcon = styled.span`
  position: absolute;
  top: 0;
  width: ${sizes.input.height};
  height: ${sizes.input.height};
  display: flex;

  /*
   * Input with left icon
   */
  ${props =>
    props.type !== 'text' &&
    css`
      background-color: ${colors.greyIconBkgd};
      left: 0;
      ::before {
        font-family: 'FontAwesome';
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        display: inline-block;
        vertical-align: middle;
        margin: auto;
        color: ${colors.greyIconColor};
      }
    `}}
    
  /*
   * Specific icon
   */

  // Search
  ${props =>
    props.type === 'search' &&
    css`
      ::before {
        content: '\f002';
      }
    `}}

  // Email
  ${props =>
    props.type === 'email' &&
    css`
      ::before {
        content: '\f1fa';
      }
    `}}
    
  // Password
  ${props =>
    props.type === 'password' &&
    css`
      background-color: transparent;
      ::before {
        content: '\f06e';
      }
    `}}
       
`;

StyledIcon.defaultProps = {
  type: 'search',
};
StyledIcon.propTypes = {
  type: PropTypes.string,
};

export default StyledIcon;
