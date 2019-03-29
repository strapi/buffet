/**
 *
 * ErrorMessage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

export function ErrorMessage({ children }) {
  return (
    <Wrapper>
      <span>{children}&nbsp;</span>
    </Wrapper>
  );
}

ErrorMessage.defaultProps = {
  children: null,
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export default memo(ErrorMessage);
