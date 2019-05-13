/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledForm from '../../styled/Form';

function Form({ children, onSubmit, ...rest }) {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  );
}

Form.defaultProps = {
  children: null,
  onSubmit: e => e.preventDefault(),
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
