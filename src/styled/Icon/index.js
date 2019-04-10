/**
 *
 * Icon
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Icon = styled.span`
  width: ${sizes.input.height};
  height: ${sizes.input.height};
  display: flex;
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
    
  /*
   * Specific icon
   */

  // Search
  ${props =>
    props.type === 'search' &&
    css`
      background-color: ${colors.greyIconBkgd};
      ::before {
        content: '\f002';
      }
    `}}

  // Email
  ${props =>
    props.type === 'email' &&
    css`
      background-color: ${colors.greyIconBkgd};
      ::before {
        content: '\f1fa';
      }
    `}}
    
  // Password
  ${props =>
    props.type === 'password' &&
    css`
      ::before {
        content: '\f06e';
      }
    `}}
`;

Icon.defaultProps = {
  type: 'search',
};

Icon.propTypes = {
  type: PropTypes.string,
};

export default Icon;
