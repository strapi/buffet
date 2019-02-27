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

function InputText(props) {
  return <StyledInputText {...props} />;
}

InputText.defaultProps = {
  ...commonDefaultProps,
  value: null,
};

InputText.propTypes = {
  ...commonPropTypes,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputText;
