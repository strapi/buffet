import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, style }) => (
  <p
    style={{
      color: '#3B3B3B',
      fontFamily: 'Lato',
      fontSize: 16,
      lineHeight: '24px',
      textAlign: 'left',
      ...style,
    }}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Paragraph.defaultProps = {
  children: null,
  style: {},
};

export default Paragraph;
