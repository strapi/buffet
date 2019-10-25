import React from 'react';
import PropTypes from 'prop-types';

const Email = props => (
  <svg width="12" height="13" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      transform="translate(-12 -3)"
      fill={props.fill}
      fillRule="evenodd"
      fontFamily="Lato-Black, Lato"
      fontSize="14"
      fontWeight="700"
    >
      <tspan x="12" y="14">
        @
      </tspan>
    </text>
  </svg>
);

Email.defaultProps = {
  fill: '#fff',
};

Email.propTypes = {
  fill: PropTypes.string,
};

export default Email;
