/**
 *
 * InputNumber
 *
 */

import React from 'react';
import RcInputNumber from 'rc-input-number';
import PropTypes from 'prop-types';
import { InputNumber as StyledInputNumber } from '@buffetjs/styles';

function InputNumber({
  autoFocus,
  id,
  className,
  name,
  onChange,
  tabIndex,
  value,
  ...rest
}) {
  const handleChange = data => {
    if (data !== null) {
      const target = {
        id,
        name,
        type: 'number',
        value: data,
      };

      onChange({ target });
    }
  };

  return (
    <StyledInputNumber className={className}>
      <RcInputNumber
        {...rest}
        autoFocus={autoFocus}
        id={id || name}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        value={value}
        className="inputNumber"
      />
    </StyledInputNumber>
  );
}

InputNumber.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  className: null,
  id: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  value: 0,
};

InputNumber.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputNumber;
