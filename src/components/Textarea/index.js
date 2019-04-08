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

import StyledTextArea from '../../styled/Textarea';

function Textarea(props) {
  return <StyledTextArea {...props} />;
}

Textarea.defaultProps = {
  ...commonDefaultProps,
  value: null,
};

Textarea.propTypes = {
  ...commonPropTypes,
  value: PropTypes.string,
};

export default Textarea;
