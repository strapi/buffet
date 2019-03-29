/**
 *
 * InputNumber
 *
 */

import React, { memo } from 'react';
import RcInputNumber from 'rc-input-number';
import PropTypes from 'prop-types';
import StyledInputNumber from './StyledInputNumber';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

// Copied css from the rc-input-number-lib
import './rc-input-number.css';

export function InputNumber({
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
    <React.Fragment>
      <StyledInputNumber />
      <RcInputNumber
        autoFocus={autoFocus}
        id={id || name}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        value={value}
        className="inputNumber"
        {...rest}
      />
    </React.Fragment>
  );
}

InputNumber.defaultProps = {
  ...commonDefaultProps,
};

InputNumber.propTypes = {
  ...commonPropTypes,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(InputNumber);
