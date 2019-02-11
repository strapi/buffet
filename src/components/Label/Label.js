/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import StylesTextArea from './StyledLabel';

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

  return <StylesTextArea htmlFor={props.htmlFor}>{content}</StylesTextArea>;
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
