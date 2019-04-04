/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../../styled/Button';

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  icon: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.oneOf(['add', 'back', 'trash']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
