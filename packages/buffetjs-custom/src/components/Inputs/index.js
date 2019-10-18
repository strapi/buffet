/**
 *
 * Inputs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get, isEmpty, isFunction } from 'lodash';
import {
  DatePicker,
  Checkbox,
  Enumeration,
  Error,
  InputNumber,
  InputText,
  Label,
  Select,
  Textarea,
  TimePicker,
  Toggle,
  UnknownInput,
} from '@buffetjs/core';
import { Description, ErrorMessage } from '@buffetjs/styles';

import DateTime from '../DateTime';
import Wrapper from './Wrapper';
/* eslint-disable react/forbid-prop-types */

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
  onBlur: handleBlur,
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
  const InputComponent = allInputs[type] || UnknownInput;

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
          {type !== 'checkbox' && (
            <Label htmlFor={name}>
              {label}
              {isEmpty(label) && <>&nbsp;</>}
            </Label>
          )}
          <InputComponent
            {...rest}
            message={label} // Only for the checkbox
            name={name}
            onBlur={isFunction(handleBlur) ? handleBlur : onBlur}
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
  customInputs: null,
  description: null,
  label: null,
  onBlur: null,
  onChange: () => {},
  validations: {},
  value: null,
};

Inputs.propTypes = {
  customInputs: PropTypes.object,
  description: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: () => {},
  type: PropTypes.string.isRequired,
  validations: PropTypes.object,
  value: PropTypes.any,
};

export default Inputs;
