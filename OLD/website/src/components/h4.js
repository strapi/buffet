import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ children, style }) => (
  <h4
    style={{
      position: 'relative',
      color: '#3b3b3b',
      fontFamily: 'Lato',
      fontSize: 20,
      fontWeight: 400,
      marginBottom: 15,
      ...style,
    }}
  >
    {children}
  </h4>
);

H4.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

H4.defaultProps = {
  children: null,
  style: {},
};

export default H4;
