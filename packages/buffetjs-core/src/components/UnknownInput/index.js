/**
 *
 * UnknownInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const UnknownInput = ({ type }) => <div>This {type} is not available</div>;

UnknownInput.defaultProps = {
  type: null,
};

UnknownInput.propTypes = {
  type: PropTypes.string,
};

export default UnknownInput;
