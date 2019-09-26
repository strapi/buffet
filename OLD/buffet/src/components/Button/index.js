/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import StyledButton from '../../styled/Button';
import PrefixIcon from '../../styled/Button/PrefixIcon';

function Button(props) {
  const content = props.label ? props.label : props.children;
  const icon =
    props.icon === true ? (
      <PrefixIcon icon="plus" />
    ) : (
      <PrefixIcon icon={props.icon} />
    );

  return (
    <StyledButton {...omit(props, ['icon'])}>
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
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
