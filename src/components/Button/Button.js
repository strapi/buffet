import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button(props) {
  const content = props.label ? props.label : props.children;
  return <StyledButton {...props}>{content}</StyledButton>;
}

Button.defaultProps = {
  type: 'button',
  label: null,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  label: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
