/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';

import StyledLabel from '../../styled/Label';

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

  return <StyledLabel htmlFor={props.htmlFor}>{content}</StyledLabel>;
}

Label.defaultProps = {
  children: null,
  message: null,
};

Label.propTypes = {
  children: PropTypes.node,
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
