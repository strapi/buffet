/**
 *
 * InputNumber
 *
 */

import React from 'react';
import RcInputNumber from 'rc-input-number';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

import StyledInputNumber from '../../styled/InputNumber';

function InputNumber({
  autoFocus,
  id,
  name,
  onChange,
  tabIndex,
  value,
  ...rest
}) {
  const handleChange = data => {
    const target = {
      id,
      name,
      type: 'number',
      value: data,
    };

    onChange({ target });
  };

  return (
    <StyledInputNumber>
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
  ...commonDefaultProps,
  value: 0,
};

InputNumber.propTypes = {
  ...commonPropTypes,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputNumber;
