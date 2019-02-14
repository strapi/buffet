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
// import styled from 'styled-components';

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
    <RcInputNumber
      autoFocus={autoFocus}
      id={id || name}
      name={name}
      onChange={handleChange}
      tabIndex={tabIndex}
      value={value}
      {...rest}
    />
  );
}

InputNumber.defaultProps = {
  ...commonDefaultProps,
};

InputNumber.propTypes = {
  ...commonPropTypes,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputNumber;
