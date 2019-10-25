import React from 'react';
import PropTypes from 'prop-types';

const NumberIcon = props => (
  <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      transform="translate(-8 -5)"
      fill={props.fill}
      fillRule="evenodd"
      fontFamily="Lato-Bold, Lato"
      fontSize="12"
      fontWeight="bold"
    >
      <tspan x="7.06" y="14.5">
        123
      </tspan>
    </text>
  </svg>
);

NumberIcon.defaultProps = {
  fill: '#fff',
};

NumberIcon.propTypes = {
  fill: PropTypes.string,
};

export default NumberIcon;
