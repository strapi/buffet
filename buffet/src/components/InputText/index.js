/**
 *
 * InputText
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
  uncontrolledDefaultProps,
  uncontrolledPropTypes,
} from '../../commonPropTypes/input';

import Input, { InputWrapper } from '../../styled/InputText';
import Icon from '../Icon';
import IconWrapper from '../../styled/InputText/IconWrapper';
import PrefixIcon from './PrefixIcon';

function InputText({
  autoFocus,
  icon,
  id,
  message,
  name,
  onChange,
  tabIndex,
  type,
  value,
  className,
  ...rest
}) {
  const [showPassword, togglePassword] = useState(false);

  return (
    <InputWrapper className={className}>
      <PrefixIcon icon={icon} type={type} />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePassword(!showPassword)}
          className={showPassword ? 'shown' : ''}
        >
          <IconWrapper background={false}>
            <Icon icon={type} />
          </IconWrapper>
        </button>
      )}
      <Input
        autoFocus={autoFocus}
        id={id || name}
        name={name}
        onChange={onChange}
        tabIndex={tabIndex}
        type={showPassword ? 'text' : type}
        value={value}
        icon={icon}
        {...rest}
      />
    </InputWrapper>
  );
}

InputText.defaultProps = {
  ...commonDefaultProps,
  ...uncontrolledDefaultProps,
  type: 'text',
  value: '',
  icon: null,
};

InputText.propTypes = {
  ...commonPropTypes,
  ...uncontrolledPropTypes,
  icon: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
