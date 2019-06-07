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
        font-weight: 100;
      }
    `}}

  // Email
  ${props =>
    props.type === 'email' &&
    css`
      background-color: ${colors.greyIconBkgd};
      ::before {
        content: '@';
        font-family: Lato;
        font-size: 16px;
        font-weight: 600;
      }
    `}}

  // Password
  ${props =>
    props.type === 'password' &&
    css`
      ::before {
        content: '\f06e';
        font-weight: 100;
      }
    `}}

  // Time
  ${props =>
    props.type === 'time' &&
    css`
      background-color: ${colors.greyIconBkgd};
      ::before {
        content: '\f017';
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
