import React from 'react';
import PropTypes from 'prop-types';

const Bool = props => (
  <svg width="19" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect fill={props.rectfill} width="19" height="10" rx="5" />
      <path d="M5 1a4 4 0 110 8 4 4 0 010-8z" fill={props.pathfill} />
    </g>
  </svg>
);

Bool.defaultProps = {
  pathfill: '#69BA05',
  rectfill: '#fff',
};

Bool.propTypes = {
  pathfill: PropTypes.string,
  rectfill: PropTypes.string,
};

export default Bool;
