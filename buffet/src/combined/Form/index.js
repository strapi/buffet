/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import FormComponent from '../../components/Form';
import InputWithError from '../InputWithError';

function Form({ form, onChange, onSubmit, values }) {
  return (
    <FormComponent onSubmit={onSubmit}>
      <div className="row">
        {Object.keys(form).map(input => (
          <div className={form[input].styleName} key={input}>
            <InputWithError
              {...form[input]}
              name={input}
              onChange={onChange}
              value={values[input]}
            />
          </div>
        ))}
      </div>
    </FormComponent>
  );
}

Form.defaultProps = {
  form: null,
  onChange: () => {},
  onSubmit: () => {},
  values: null,
};

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.any),
};

export default Form;
