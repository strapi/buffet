import React from 'react';
import PropTypes from 'prop-types';

const Json = props => (
  <svg width="22" height="12" xmlns="http://www.w3.org/2000/svg">
    <g
      fill={props.fill}
      fillRule="evenodd"
      fontFamily="Lato-Bold, Lato"
      fontSize="12"
      fontWeight="bold"
    >
      <text transform="translate(0 -5)">
        <tspan x=".452" y="15">
          {`{`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} `}
        </tspan>
      </text>
      <text letterSpacing="1" transform="translate(0 -5)">
        <tspan x="6.449" y="12">
          …
        </tspan>
      </text>
    </g>
  </svg>
);

Json.defaultProps = {
  fill: '#fff',
};

Json.propTypes = {
  fill: PropTypes.string,
};

export default Json;
