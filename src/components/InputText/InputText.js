/**
 *
 * InputText
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
import StyledInputText from './StyledInputText';

function InputText({ onChange, value, ...rest }) {
  const handleInputChange = e => {
    const target = e.target;
    onChange({ target });
  };

  return (
    <StyledInputText onChange={handleInputChange} value={value} {...rest} />
  );
}

InputText.defaultProps = {
  ...commonDefaultProps,
  onChange: null,
  placeholder: null,
};

InputText.propTypes = {
  ...commonPropTypes,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputText;
