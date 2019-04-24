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
} from '../../commonPropTypes/input';

import Input, { InputWrapper } from '../../styled/InputText';
import Icon from '../../styled/Icon';

function InputText({
  autoFocus,
  id,
  message,
  name,
  onChange,
  tabIndex,
  type,
  value,
  ...rest
}) {
  const [showPassword, togglePassword] = useState(false);

  return (
    <InputWrapper>
      {(type === 'search' || type === 'email') && <Icon type={type} />}
      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePassword(!showPassword)}
          className={showPassword ? 'shown' : ''}
        >
          <Icon type={type} />
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
  onChange: () => {},
  type: 'text',
  value: null,
};

InputText.propTypes = {
  ...commonPropTypes,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
