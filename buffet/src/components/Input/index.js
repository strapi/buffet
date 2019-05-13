/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import Enumeration from '../Enumeration';
import InputNumber from '../InputNumber';
import InputText from '../InputText';
import Select from '../Select';
import Textarea from '../Textarea';
import TimePicker from '../TimePicker';
import Toggle from '../Toggle';
import UnknowInput from '../UnknowInput';

const inputs = {
  bool: Toggle,
  checkbox: Checkbox,
  date: DatePicker,
  enum: Enumeration,
  number: InputNumber,
  text: InputText,
  textarea: Textarea,
  time: TimePicker,
  select: Select,
  email: InputText,
  password: InputText,
  search: InputText,
};

function Input({ onChange, type, ...rest }) {
  const InputComponent = inputs[type] || UnknowInput;

  return <InputComponent onChange={onChange} type={type} {...rest} />;
}

Input.defaultProps = {
  onChange: () => {},
  type: null,
};

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
