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
import IconText from '../../styled/InputText/IconText';
import IconWrapper from '../../styled/InputText/IconWrapper';

function InputText({
  autoFocus,
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
      {type === 'search' && (
        <IconWrapper>
          <Icon icon={type} />
        </IconWrapper>
      )}
      {type === 'email' && <IconText text="@" />}
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
};

InputText.propTypes = {
  ...commonPropTypes,
  ...uncontrolledPropTypes,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
