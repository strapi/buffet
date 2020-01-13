import React from 'react';
import PropTypes from 'prop-types';

const Plus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 13"
    width="13px"
    height="13px"
    {...props}
  >
    <g data-name="Layer 2">
      <path
        d="M6.5.5v12m6-6H.5"
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

Plus.defaultProps = {
  fill: '#fff',
};

Plus.propTypes = {
  fill: PropTypes.string,
};

export default Plus;
