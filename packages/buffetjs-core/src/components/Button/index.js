/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Button as StyledButton, buttonsColors } from '@buffetjs/styles';
import { Plus } from '@buffetjs/icons';
import PrefixIcon from '../PrefixIcon';

function Button(props) {
  const content = props.label ? props.label : props.children;
  const { disabled, color } = props;

  const icon =
    props.icon === true ? (
      <Plus
        height="11px"
        width="11px"
        fill={`${buttonsColors[`${color}`].color}`}
      />
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
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
    'none',
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
