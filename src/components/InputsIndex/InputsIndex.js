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
import Number from '../InputNumber';
import StringType from '../InputBase';
import Textarea from '../Textarea';
import UnknowInput from './UnknownInput';

const inputs = {
  checkbox: Checkbox,
  date: DatePicker,
  email: StringType,
  number: Number,
  string: StringType,
  text: StringType,
  textarea: Textarea,
};

function InputsIndex({ onChange, type, ...rest }) {
  const Compo = inputs[type] || UnknowInput;

  return (
    <Error {...rest} type={type}>
      {({ canCheckError, onBlur, error, setCheck }) => (
        <>
          <Label htmlFor={rest.name} message={rest.label} />
          <Compo
            onBlur={onBlur}
            onChange={e => {
              if (!canCheckError) {
                setCheck();
              }

              onChange(e);
            }}
            {...rest}
            type={type}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </Error>
  );
}

InputsIndex.defaultProps = {
  onChange: () => {},
  type: null,
};

InputsIndex.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default memo(InputsIndex);
