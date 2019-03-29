/* eslint-disable no-shadow */
/**
 *
 * Error
 *
 */

import { memo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import createYupSchema from '../../utils/createYupSchema';

function reducer(state, action) {
  const { error, type } = action;

  switch (type) {
    case 'SET_ERROR':
      return { ...state, error };
    case 'SET_CHECK':
      return { ...state, canCheckErrors: true };
    default:
      return state;
  }
}

function Error({ children, validations, value, translatedErrors, type }) {
  const [state, dispatch] = useReducer(reducer, {
    error: false,
    canCheckErrors: !isEmpty(value),
  });

  const { error, canCheckErrors } = state;

  const handleBlur = async ({ target }) => {
    const resetError = () =>
      dispatch({
        type: 'SET_ERROR',
        error: null,
      });

    if (canCheckErrors) {
      try {
        await createYupSchema(type, validations, translatedErrors).validate(
          target.value,
        );

        resetError();
      } catch (err) {
        const { message } = err;

        dispatch({
          type: 'SET_ERROR',
          error: message,
        });
      }

      return;
    }

    resetError();
  };

  const setCheck = () =>
    dispatch({
      type: 'SET_CHECK',
    });

  if (children) {
    return children({
      canCheck: state.canCheck,
      error,
      onBlur: handleBlur,
      setCheck,
    });
  }

  return null;
}

Error.defaultProps = {
  children: null,
  translatedErrors: {
    email: 'This is not an email',
    string: 'This is not a string',
    number: 'This is not a number',
    json: 'This is not a JSON',
    max: 'This is too high',
    maxLength: 'This is too long',
    min: 'This is too small',
    minLength: 'This is too short',
    required: 'This value is required',
    regex: 'Thid does not match the format',
  },
  validations: {},
  value: null,
};

Error.propTypes = {
  children: PropTypes.func,
  translatedErrors: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  validations: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default memo(Error);
