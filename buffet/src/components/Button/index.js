/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../../styled/Button';
import PrefixIcon from '../../styled/Button/PrefixIcon';

function Button(props) {
  const content = props.label ? props.label : props.children;
  const icon = props.icon ? <PrefixIcon icon={props.icon} /> : null;

  return (
    <StyledButton {...props}>
      {icon}
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  icon: null,
  label: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
