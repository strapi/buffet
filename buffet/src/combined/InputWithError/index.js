/**
 *
 * InputWithError
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Error from '../../components/Error';
import ErrorMessage from '../../components/ErrorMessage';
import Label from '../../components/Label';
import Input from '../../components/Input';

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
  return (
    <Error name={name} type={type} validations={validations}>
      {({ canCheck, onBlur, error, dispatch }) => (
        <>
          <Label htmlFor={name}>{label}</Label>
          <Input
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
            value={value}
            {...rest}
          />

          {error}
          {!error && <p>{description}</p>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
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
