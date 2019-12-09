import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <svg
    viewBox="0 0 8 8"
    width="10"
    height="10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.fill} fillRule="nonzero">
      <path d="M1.156 7.433c.06 0 .114-.023.16-.07l3.258-3.257a.221.221 0 000-.322L1.317.527a.221.221 0 00-.322 0l-.35.35a.221.221 0 000 .321l2.748 2.747L.646 6.692a.221.221 0 000 .322l.35.35c.046.046.1.07.16.07z" />
      <path d="M6.888 7.433a.221.221 0 01-.16-.07L3.47 4.106a.221.221 0 010-.322L6.728.527a.221.221 0 01.321 0l.35.35a.221.221 0 010 .321L4.65 3.945 7.4 6.692a.221.221 0 010 .322l-.35.35a.221.221 0 01-.16.07z" />
    </g>
  </svg>
);

Icon.defaultProps = {
  fill: '#b3b5b9',
};

Icon.propTypes = {
  fill: PropTypes.string,
};

export default Icon;
