/**
 *
 * Error
 *
 */

import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { createYupSchema } from '@buffetjs/utils';
import reducer from './reducer';

function Error({ children, translatedErrors, type, validations, value }) {
  const [state, dispatch] = useReducer(reducer, {
    error: false,
    canCheck: !isEmpty(value),
  });

  const { error, canCheck } = state;

  const resetError = () => {
    dispatch({
      type: 'SET_ERROR',
      error: null,
    });
  };

  const setError = message => {
    dispatch({
      type: 'SET_ERROR',
      error: message,
    });
  };

  const handleBlur = async ({ target }) => {
    if (canCheck) {
      try {
        await createYupSchema(type, validations, translatedErrors).validate(
          target.value
        );
        resetError();
      } catch (err) {
        const { message } = err;
        setError(message);
      }

      return;
    }
    resetError();
  };

  if (children) {
    return children({
      canCheck,
      dispatch,
      error,
      onBlur: handleBlur,
    });
  }
}

Error.defaultProps = {
  children: () => {},
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
  type: null,
  validations: {},
  value: null,
};

Error.propTypes = {
  children: PropTypes.func,
  translatedErrors: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
  validations: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default Error;
