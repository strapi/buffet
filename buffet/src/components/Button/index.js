/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../styled/Button';
import StyledFontAwesomeIcon from '../../styled/Button/StyledFontAwesomeIcon';

function Button(props) {
  const content = props.label ? props.label : props.children;
  const icon = props.icon ? <StyledFontAwesomeIcon icon={faPlus} /> : null;

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
  icon: false,
  label: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
