import React from 'react';
import PropTypes from 'prop-types';

function Presentation({ children, description, title }) {
  return (
    <div className="story">
      <h1 style={{ marginBottom: 15, fontWeight: 600 }}>{title}</h1>
      <p style={{ fontSize: 14, marginBottom: 28 }}>{description}&nbsp;</p>
      {children}
    </div>
  );
}

Presentation.defaultProps = {
  children: null,
  description: null,
  title: null,
};

Presentation.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Presentation;
