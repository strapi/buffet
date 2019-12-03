import React from 'react';
import PropTypes from 'prop-types';

const Bool = ({ rectFill, pathFill, ...rest }) => (
  <svg width="19" height="10" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g fill="none" fillRule="evenodd">
      <rect fill={rectFill} width="19" height="10" rx="5" />
      <path d="M5 1a4 4 0 110 8 4 4 0 010-8z" fill={pathFill} />
    </g>
  </svg>
);

Bool.defaultProps = {
  pathFill: '#69BA05',
  rectFill: '#fff',
};

Bool.propTypes = {
  pathFill: PropTypes.string,
  rectFill: PropTypes.string,
};

export default Bool;
