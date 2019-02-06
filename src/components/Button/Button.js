/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button(props) {
  const content = props.label ? props.label : props.children;

  return <StyledButton {...props}>{content}</StyledButton>;
}

Button.defaultProps = {
  children: null,
  label: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};
export default Button;
