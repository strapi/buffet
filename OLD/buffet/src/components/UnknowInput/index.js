/**
 *
 * UnknowInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const UnknowInput = ({ type }) => <div>This {type} is not available</div>;

UnknowInput.defaultProps = {
  type: null,
};

UnknowInput.propTypes = {
  type: PropTypes.string,
};

export default UnknowInput;
