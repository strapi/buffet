import React from 'react';
import PropTypes from 'prop-types';
import validate from '../../utils/inputsValidation';

// NOTE: The api should have the error prop only
class ErrorWrapper extends React.Component {
  state = { error: false, errorMessage: '', hasInitialValue: false };

  componentDidMount() {
    const { error, errorMessage, value } = this.props;
    const hasInitialValue = this.checkInitialValue(value);

    this.setState({ hasInitialValue, error, errorMessage });
  }

  componentDidUpdate(prevProps) {
    const { didCheckErrors, error, errorMessage, value } = this.props;

    if (prevProps.value !== value) {
      this.setHasInitialValue();
    }

    if (prevProps.didCheckErrors !== didCheckErrors) {
      const errorMsg = error ? errorMessage : '';

      this.setError(error, errorMsg);
    }
  }

  /* eslint-disable consistent-return */
  handleBlur = e => {
    const { hasInitialValue } = this.state;
    const { onBlur, translatedErrors, type, validations } = this.props;

    if (typeof onBlur === 'function') {
      return onBlur(e);
    }

    if (hasInitialValue) {
      const {
        target: { value }
      } = e;
      const errorType = validate(value, validations, type);
      const errorMessage = translatedErrors[errorType] || '';

      this.setError(errorMessage !== '', errorMessage);
    }
  };
  /* eslint-enable consistent-return */

  checkInitialValue = value => !!value;

  setError = (error, errorMessage) => this.setState({ error, errorMessage });

  setHasInitialValue = () => this.setState({ hasInitialValue: true });

  render() {
    const { error, errorMessage } = this.state;
    const { children } = this.props;

    if (children) {
      return children({ error, errorMessage, onBlur: this.handleBlur });
    }

    return null;
  }
}

ErrorWrapper.propTypes = {
  children: PropTypes.any,
  didCheckErrors: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  translatedErrors: PropTypes.object,
  type: PropTypes.string,
  validations: PropTypes.object,
  value: PropTypes.any
};

ErrorWrapper.defaultProps = {
  children: null,
  didCheckErrors: false,
  error: false,
  errorMessage: '',
  onBlur: false,
  translatedErrors: {
    email: 'This is not an email',
    json: 'This is not a JSON',
    max: 'This is too high',
    maxLength: 'This is too long',
    min: 'This is too small',
    minLength: 'This is too short',
    required: 'This value is required',
    regex: 'Thid does not match the format'
  },
  type: 'text',
  validations: {},
  value: null
};

export default ErrorWrapper;
