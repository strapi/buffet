/**
 *
 * Inputs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Error from '../../components/Error';
import Label from '../../components/Label';
import Description from '../../styled/Description';
import ErrorMessage from '../../styled/ErrorMessage';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
// import { InputWrapper as Wrapper } from '../../styled/Form';
import Checkbox from '../../components/Checkbox';
import DatePicker from '../../components/DatePicker';
import Enumeration from '../../components/Enumeration';
import InputNumber from '../../components/InputNumber';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import TimePicker from '../../components/TimePicker';
import Toggle from '../../components/Toggle';
import UnknowInput from '../../components/UnknowInput';
import DateTime from '../DateTime';
import Wrapper from './Wrapper';

const inputs = {
  bool: Toggle,
  checkbox: Checkbox,
  date: DatePicker,
  datetime: DateTime,
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

function Inputs({
  customInputs,
  description,
  label,
  name,
  onChange,
  type,
  validations,
  value,
  ...rest
}) {
  let inputValue;

  switch (type) {
    case 'checkbox':
    case 'bool':
      inputValue = value || false;
      break;
    default:
      inputValue = value || '';
  }
  const allInputs = Object.assign(inputs, customInputs);
  const InputComponent = allInputs[type] || UnknowInput;

  if (type === get(customInputs, 'type', '')) {
    return (
      <InputComponent
        description={description}
        label={label}
        name={name}
        onChange={onChange}
        type={type}
        validations={validations}
        value={value}
      />
    );
  }

  return (
    <Error name={name} type={type} validations={validations}>
      {({ canCheck, onBlur, error, dispatch }) => (
        <Wrapper error={error}>
          {type !== 'checkbox' && <Label htmlFor={name}>{label}</Label>}
          <InputComponent
            {...rest}
            message={label} // Only for the checkbox
            name={name}
            onBlur={onBlur}
            onChange={e => {
              if (!canCheck) {
                dispatch({
                  type: 'SET_CHECK',
                });
              }

              dispatch({
                type: 'SET_ERROR',
                error: null,
              });
              onChange(e);
            }}
            type={type}
            value={inputValue}
          />
          {!error && <Description>{description}</Description>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
      )}
    </Error>
  );
}

Inputs.defaultProps = {
  ...commonDefaultProps,
  customInputs: null,
  description: null,
  label: null,
  onChange: () => {},
};

Inputs.propTypes = {
  ...commonPropTypes,
  // eslint-disable-next-line react/forbid-prop-types
  customInputs: PropTypes.object,
  description: PropTypes.string,
  label: PropTypes.string,
  onChange: () => {},
};

export default Inputs;
