import { isBoolean, isNaN } from 'lodash';
import * as yup from 'yup';

const createYupSchema = (type, validations, translatedErrors = {}) => {
  let schema = yup.mixed();

  if (['text', 'textarea', 'email', 'password', 'select'].includes(type)) {
    schema = yup.string(translatedErrors.string);
  }

  if (type === 'email') {
    schema = schema.email(translatedErrors.email);
  }

  if (type === 'number') {
    schema = yup
      .number()
      .transform(cv => (isNaN(cv) ? undefined : cv))
      .typeError(translatedErrors.number);
  }

  if (['date', 'datetime'].includes(type)) {
    schema = schema.date().typeError(translatedErrors.date);
  }

  Object.keys(validations).forEach(validation => {
    const validationValue = validations[validation];

    if (
      !!validationValue ||
      (!isBoolean(validationValue) &&
        Number.isInteger(Math.floor(validationValue))) ||
      validationValue === 0
    ) {
      switch (validation) {
        case 'required':
          schema = schema.required(translatedErrors.required);
          break;
        case 'max':
          schema = schema.max(validationValue, translatedErrors.max);
          break;
        case 'maxLength':
          schema = schema.max(validationValue, translatedErrors.maxLength);
          break;
        case 'min':
          schema = schema.min(validationValue, translatedErrors.min);
          break;
        case 'minLength':
          schema = schema.min(validationValue, translatedErrors.minLength);
          break;
        case 'regex':
          schema = schema.matches(validationValue, translatedErrors.regex);
          break;
        case 'lowercase':
          if (['text', 'textarea', 'email', 'string'].includes(type)) {
            schema = schema.strict().lowercase();
          }
          break;
        case 'uppercase':
          if (['text', 'textarea', 'email', 'string'].includes(type)) {
            schema = schema.strict().uppercase(translatedErrors.uppercase);
          }
          break;
        case 'positive':
          if (
            ['number', 'integer', 'bigint', 'float', 'decimal'].includes(type)
          ) {
            schema = schema.positive();
          }
          break;
        case 'negative':
          if (
            ['number', 'integer', 'bigint', 'float', 'decimal'].includes(type)
          ) {
            schema = schema.negative();
          }
          break;
        default:
      }
    }
  });

  return schema;
};

export default createYupSchema;
