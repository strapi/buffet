/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';

import { Label as StyledLabel } from '@buffetjs/styles';

function Label(props) {
  const content = (() => {
    if (isFunction(props.message)) {
      return props.message();
    }

    if (props.message) {
      return props.message;
    }

    return props.children;
  })();

  return (
    <StyledLabel htmlFor={props.htmlFor} className={props.className}>
      {content}
    </StyledLabel>
  );
}

Label.defaultProps = {
  children: null,
  className: null,
  message: null,
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
};

export default Label;
