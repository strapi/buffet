/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Form({ children, onSubmit, ...rest }) {
  return (
    <form onSubmit={onSubmit} {...rest}>
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </form>
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
