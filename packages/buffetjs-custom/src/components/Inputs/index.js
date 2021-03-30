/**
 *
 * Inputs
 *
 */

import React, { useMemo, useRef, useState } from 'react';
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
import { Description, ErrorMessage, Tooltip } from '@buffetjs/styles';

import DateTime from '../DateTime';
import Wrapper, { IconWrapper } from './Wrapper';
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
  translatedErrors,
  type,
  validations,
  value,
  ...rest
}) {
  const [isOver, setIsOver] = useState(false);

  const inputValue = useMemo(() => {
    let ret;

    switch (type) {
      case 'checkbox':
        ret = value || false;
        break;
      case 'bool':
        ret = value;
        break;
      case 'number':
        ret = isUndefined(value) ? '' : value;
        break;
      default:
        ret = value || '';
    }

    return ret;
  }, [type, value]);

  const allInputs = useRef(Object.assign(inputs, customInputs));
  const InputComponent = allInputs.current[type] || UnknownInput;
  const inputId = useMemo(() => id || name, [id, name]);
  const descriptionId = `description-${inputId}`;
  const errorId = `error-${inputId}`;
  const handleMouseEvent = () => {
    setIsOver(prev => !prev);
  };

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
      translatedErrors={translatedErrors}
      type={type}
      validations={validations}
    >
      {({ canCheck, onBlur, error, dispatch }) => (
        <Wrapper error={error}>
          {type !== 'checkbox' && (
            <Label htmlFor={inputId}>
              <span>
                {label}
                {isEmpty(label) && <>&nbsp;</>}
              </span>
              {rest.labelIcon && (
                <>
                  <IconWrapper
                    data-tip={rest.labelIcon.title}
                    data-for="icon-title"
                    onMouseEnter={handleMouseEvent}
                    onMouseLeave={handleMouseEvent}
                  >
                    {rest.labelIcon.icon}
                  </IconWrapper>
                  {isOver && <Tooltip id="icon-title" />}
                </>
              )}
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
            <Description id={descriptionId} title={description}>
              {description}
            </Description>
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
  labelIcon: null,
  onBlur: null,
  onChange: () => {},
  translatedErrors: {
    date: 'This is not a date',
    email: 'This is not an email',
    string: 'This is not a string',
    number: 'This is not a number',
    json: 'This is not a JSON',
    max: 'This is too high',
    maxLength: 'This is too long',
    min: 'This is too small',
    minLength: 'This is too short',
    required: 'This value is required',
    regex: 'This does not match the format',
    uppercase: 'This must be a upper case string',
  },
  validations: {},
  value: null,
};

Inputs.propTypes = {
  customInputs: PropTypes.object,
  description: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.shape({ icon: PropTypes.any, title: PropTypes.string }),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: () => {},
  translatedErrors: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  validations: PropTypes.object,
  value: PropTypes.any,
};

export default Inputs;
