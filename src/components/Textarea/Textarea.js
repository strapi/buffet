/**
 *
 * Textarea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
import StyledTextArea from './StyledTextarea';

function Textarea({ onChange, value, ...rest }) {
  const handleInputChange = e => {
    const target = e.target;
    onChange({ target });
  };

  return (
    <StyledTextArea onChange={handleInputChange} value={value} {...rest} />
  );
}

Textarea.defaultProps = {
  ...commonDefaultProps,
  placeholder: null,
};

Textarea.propTypes = {
  ...commonPropTypes,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Textarea;
