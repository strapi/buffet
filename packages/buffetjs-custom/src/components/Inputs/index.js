/**
 *
 * Inputs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get, isEmpty, isFunction, isUndefined } from 'lodash';
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
  error: inputError,
  id,
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
    case 'number':
      inputValue = isUndefined(value) ? '' : value;
      break;
    default:
      inputValue = value || '';
  }
  const allInputs = Object.assign(inputs, customInputs);
  const InputComponent = allInputs[type] || UnknownInput;
  const inputId = id || name;
  const descriptionId = `description-${inputId}`;
  const errorId = `error-${inputId}`;

  if (get(customInputs, type, null) !== null) {
    return (
      <InputComponent
        description={description}
        error={inputError}
        label={label}
        name={name}
        onBlur={handleBlur}
        onChange={onChange}
        type={type}
        validations={validations}
        value={value}
        {...rest}
      />
    );
  }

  return (
    <Error
      inputError={inputError}
      name={name}
      type={type}
      validations={validations}
    >
      {({ canCheck, onBlur, error, dispatch }) => (
        <Wrapper error={error}>
          {type !== 'checkbox' && (
            <Label htmlFor={inputId}>
              {label}
              {isEmpty(label) && <>&nbsp;</>}
            </Label>
          )}
          <InputComponent
            {...rest}
            message={label} // Only for the checkbox
            name={name}
            id={inputId}
            aria-describedby={`${!error && description ? descriptionId : ''} ${
              error ? errorId : ''
            }`}
            aria-invalid={error ? 'true' : 'false'}
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
          {!error && description && (
            <Description id={descriptionId}>{description}</Description>
          )}
          {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
        </Wrapper>
      )}
    </Error>
  );
}

Inputs.defaultProps = {
  customInputs: null,
  description: null,
  id: null,
  error: null,
  label: null,
  onBlur: null,
  onChange: () => {},
  validations: {},
  value: null,
};

Inputs.propTypes = {
  customInputs: PropTypes.object,
  description: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: () => {},
  type: PropTypes.string.isRequired,
  validations: PropTypes.object,
  value: PropTypes.any,
};

export default Inputs;
