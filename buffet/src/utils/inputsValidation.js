/* eslint-disable */
const validate = (value, validations = {}, type = 'text') => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  let errorType = '';

  Object.keys(validations).map(validation => {
    const validationValue = validations[validation];

    switch (validation) {
      case 'max':
        if (parseInt(value, 10) > validationValue) {
          errorType = 'max';
        }
        break;
      case 'maxLength':
        if (value && value.length > validationValue) {
          errorType = 'maxLength';
        }
        break;
      case 'min':
        if (parseInt(value, 10) < validationValue) {
          errorType = 'min';
        }
        break;
      case 'minLength':
        if (value && value.length < validationValue) {
          errorType = 'minLength';
        }
        break;
      case 'required':
        if (type === 'date') {
          errorType = value === null ? 'required' : '';
        } else {
          errorType = value === null || value.length === 0 ? 'required' : '';
        }
        break;
      case 'regex':
        if (!new RegExp(validationValue).test(value)) {
          errorType = 'regex';
        }
        break;
      case 'type':
        if (validation === 'json') {
          try {
            value = JSON.parse(value);
          } catch (err) {
            errorType = 'json';
          }
        }
        break;
      default:
      // Do nothing
    }
  });

  if (type === 'email' && !emailRegex.test(value)) {
    errorType = 'email';
  }

  return errorType;
};

export default validate;
