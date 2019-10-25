import React from 'react';
import PropTypes from 'prop-types';

const DynamicZone = props => (
  <svg width="18" height="8" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.778.012a3.952 3.952 0 00-2.797 1.137L8.89 3l-.004-.003-1.122.989.007.007-1.996 1.77c-.474.47-1.104.73-1.774.73a2.509 2.509 0 01-2.511-2.5c0-1.378 1.126-2.5 2.511-2.5.67 0 1.3.26 1.807.763L6.648 3l1.119-.988-.937-.83A3.984 3.984 0 004 .015a3.988 3.988 0 00-4 3.978C0 6.19 1.793 7.975 4 7.975A3.97 3.97 0 006.796 6.84L8.89 4.986l.004.003 1.118-.992-.004-.004 1.997-1.767a2.49 2.49 0 011.774-.733 2.509 2.509 0 012.51 2.5c0 1.378-1.125 2.5-2.51 2.5-.67 0-1.3-.26-1.808-.76l-.84-.744-1.119.993.937.83a3.978 3.978 0 002.826 1.163c2.211 0 4.004-1.786 4.004-3.982s-1.793-3.981-4-3.981z"
      fill={props.fill}
      fillRule="nonzero"
    />
  </svg>
);

DynamicZone.defaultProps = {
  fill: '#fff',
};

DynamicZone.propTypes = {
  fill: PropTypes.string,
};

export default DynamicZone;
