/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Button as StyledButton } from '@buffetjs/styles';
import PrefixIcon from '../PrefixIcon';

function Button(props) {
  const content = props.label ? props.label : props.children;
  const { disabled } = props;
  const icon =
    props.icon === true ? (
      <PrefixIcon icon="plus" />
    ) : (
      <PrefixIcon icon={props.icon} />
    );

  return (
    <StyledButton {...omit(props, ['icon'])} disabled={disabled}>
      {icon}
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  icon: false,
  label: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
