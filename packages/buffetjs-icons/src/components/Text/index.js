import React from 'react';
import PropTypes from 'prop-types';

const Text = props => (
  <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      transform="translate(-9 -4)"
      fill={props.fill}
      fillRule="evenodd"
      fontFamily="Lato-Bold, Lato"
      fontSize="13"
      fontWeight="bold"
      letterSpacing=".7"
    >
      <tspan x="9" y="15">
        Ab
      </tspan>
    </text>
  </svg>
);

Text.defaultProps = {
  fill: '#fff',
};

Text.propTypes = {
  fill: PropTypes.string,
};

export default Text;
