import React from 'react';
import PropTypes from 'prop-types';

const Component = props => (
  <svg width="13" height="11" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill={props.fill} fillRule="evenodd">
      <g transform="translate(5 3.72)">
        <rect x="1" width="1" height="5" rx=".5" />
        <rect y="4" width="3" height="3" rx="1.5" />
      </g>
      <g transform="rotate(60 6.227 9.687)">
        <rect x="1" y="2" width="1" height="5" rx=".5" />
        <rect width="3" height="3" rx="1.5" />
      </g>
      <g transform="rotate(-60 1.775 1.025)">
        <rect
          transform="matrix(-1 0 0 1 3 0)"
          x="1"
          y="2"
          width="1"
          height="5"
          rx=".5"
        />
        <rect width="3" height="3" rx="1.5" />
      </g>
    </g>
  </svg>
);

Component.defaultProps = {
  fill: '#fff',
};

Component.propTypes = {
  fill: PropTypes.string,
};

export default Component;
