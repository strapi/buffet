/**
 *
 * InputsIndex
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import Error from '../Error';
import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
import InputNumber from '../InputNumber';
import Small from '../Small';
import StringType from '../InputBase';
import Textarea from '../Textarea';
import Spacer from './Spacer';
import UnknowInput from './UnknownInput';

const inputs = {
  checkbox: Checkbox,
  date: DatePicker,
  email: StringType,
  number: InputNumber,
  string: StringType,
  text: StringType,
  textarea: Textarea,
};

/* istanbul ignore next */
export function InputsIndex({ description, onChange, type, ...rest }) {
  const Compo = inputs[type] || UnknowInput;

  return (
    <Error {...rest} type={type}>
      {({ canCheckError, onBlur, error, dispatch }) => (
        <>
          <Label htmlFor={rest.name} message={rest.label} />
          <Compo
            onBlur={onBlur}
            onChange={e => {
              if (!canCheckError) {
                dispatch({ type: 'SET_CHECK' });
              }

              dispatch({ type: 'SET_ERROR', error: null });

              onChange(e);
            }}
            {...rest}
            type={type}
          />
          {description && <Small error={error}>{description}</Small>}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {!error && !description && <Spacer />}
        </>
      )}
    </Error>
  );
}

InputsIndex.defaultProps = {
  description: null,
  onChange: () => {},
  type: null,
};

InputsIndex.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default memo(InputsIndex);
