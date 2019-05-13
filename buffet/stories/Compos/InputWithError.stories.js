import React, { useReducer } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import reducer from '../utils/reducer';

import Error from '../../src/components/Error';
import InputText from '../../src/components/InputText';
import ErrorMessage from '../../src/styled/ErrorMessage';

function InputStory() {
  const [values, dispatchValue] = useReducer(reducer, {});

  const defaultProps = {
    placeholder: 'Firstname',
    name: 'firstname',
    type: 'text',
    validations: {
      required: true,
      min: 7,
    },
  };

  const handleChange = ({ target: { name, value } }) => {
    dispatchValue({
      type: 'ON_CHANGE',
      key: name,
      value,
    });
  };

  return (
    <Error {...defaultProps}>
      {({ canCheck, onBlur, error, dispatch }) => (
        <>
          <InputText
            {...defaultProps}
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
              handleChange(e);
            }}
            value={values.firstname || ''}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </Error>
  );
}

storiesOf('Components|InputWithError', module).add('Simple', () => (
  <InputStory />
));
