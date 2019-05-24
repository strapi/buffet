import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ url, type = 'main', onClick, children, style }) => (
  <a
    href={url || ''}
    onClick={onClick}
    className="button"
    style={{
      display: 'inline-block',
      height: 48,
      padding: '0 36px',
      borderRadius: 24,
      backgroundColor: type === 'main' ? '#FF9C95' : '#0B269C',
      textAlign: 'left',
      textDecoration: 'none',
      textTransform: 'uppercase',
      lineHeight: '48px',
      color: '#ffffff',
      fontSize: 12,
      fontFamily: 'Lato',
      fontWeight: 700,
      letterSpacing: 0.7,
      ...style,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
      <span
        className="button_arrow"
        style={{
          position: 'relative',
          display: 'inline-block',
          width: 24,
          height: 1,
          marginTop: -1,
          marginLeft: 36,
          background: '#ffffff',
        }}
      >
        <span
          style={{
            position: 'absolute',
            right: -1,
            top: -2,
            width: 6,
            height: 6,
            borderRight: '1px solid #ffffff',
            borderTop: '1px solid #ffffff',
            transform: 'rotate(45deg)',
          }}
        />
      </span>
    </div>
  </a>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  url: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  style: {},
  type: 'main',
  url: '',
};

export default Button;
