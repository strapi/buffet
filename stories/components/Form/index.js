/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.form`
  padding-top=: 39px;
`;

function Form({ children, onSubmit, ...rest }) {
  return (
    <Wrapper onSubmit={onSubmit} {...rest}>
      <div className="container-fluid">
        <div className="row">{children}</div>
      </div>
    </Wrapper>
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
