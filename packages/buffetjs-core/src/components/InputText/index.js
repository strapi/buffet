/**
 *
 * InputText
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconWrapper,
  InputText as Input,
  InputWrapper,
} from '@buffetjs/styles';
import Icon from '../Icon';
import PrefixIcon from './PrefixIcon';

function InputText({
  autoFocus,
  className,
  icon,
  id,
  name,
  onChange,
  tabIndex,
  type,
  value,
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
          tabIndex="-1"
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
  autoComplete: 'off',
  autoFocus: false,
  className: null,
  icon: null,
  id: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  type: 'text',
  value: '',
};

InputText.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
