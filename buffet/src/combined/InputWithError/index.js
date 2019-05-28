/**
 *
 * InputWithError
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import Label from '../../components/Label';
import Input from '../../components/Input';

import Description from '../../styled/Description';
import ErrorMessage from '../../styled/ErrorMessage';
import { InputWrapper } from '../../styled/Form';

import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

function InputWithError({
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

  return (
    <Error name={name} type={type} validations={validations}>
      {({ canCheck, onBlur, error, dispatch }) => (
        <InputWrapper>
          <Label htmlFor={name}>{label}</Label>
          <Input
            {...rest}
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
        </InputWrapper>
      )}
    </Error>
  );
}

InputWithError.defaultProps = {
  ...commonDefaultProps,
  description: null,
  label: null,
  onChange: () => {},
};

InputWithError.propTypes = {
  ...commonPropTypes,
  description: PropTypes.string,
  label: PropTypes.string,
  onChange: () => {},
};

export default InputWithError;
