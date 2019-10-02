/**
 *
 * Textarea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Textarea as StyledTextArea } from '@buffetjs/styles';

function Textarea(props) {
  return <StyledTextArea {...props} />;
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Textarea;
