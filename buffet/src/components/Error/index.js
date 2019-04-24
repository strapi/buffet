/**
 *
 * Error
 *
 */

import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import createYupSchema from '../../utils/createYupSchema';
import reducer from '../../utils/reducer';

import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

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
          target.value,
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
  ...commonDefaultProps,
  children: () => {},
};

Error.propTypes = {
  ...commonPropTypes,
  children: PropTypes.func,
};

export default Error;
