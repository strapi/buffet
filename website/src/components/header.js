import React from 'react';

import Button from './button';

import background from '../images/header@2x.png';

const Navigation = () => (
  <header
    style={{
      width: '100%',
      height: 595,
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    }}
  >
    <div
      className="container"
      style={{
        height: '100%',
        margin: '0 auto',
        maxWidth: 1270,
      }}
    >
      <div
        className="row align-items-end container_description"
        style={{
          height: '100%',
        }}
      >
        <div className="col-lg-5 offset-lg-6 col-xs-12">
          <div
            className="wrapper_description"
            style={{
              height: 356,
              padding: 36,
              margin: '0 -36px',
              marginBottom: '-72px',
              background: '#ffffff',
              boxShadow: '0 2px 4px 0 rgba(234, 234, 234, 0.5)',
            }}
          >
            <h2
              style={{
                position: 'relative',
                display: 'inline-block',
                width: '75%', // 8 columns
                color: '#3B3B3B',
                fontSize: 32,
                fontFamily: 'Lato',
                fontWeight: 700,
                lineHeight: '40px',
              }}
            >
              Buffet.js:
              <br className="d-block d-sm-none" />
              {' '}
All-you-can-eat React
              components library
              <span
                style={{
                  position: 'absolute',
                  left: 70,
                  bottom: -24,
                  width: 36,
                  height: 6,
                  backgroundColor: '#0B269C',
                  transform: 'rotate(20deg)',
                }}
              />
            </h2>
            <p
              style={{
                width: '75%', // 8 columns
                marginTop: 54,
                marginBottom: 60,
                color: '#3B3B3B',
                fontSize: 18,
                fontFamily: 'Lato',
                lineHeight: '24px',
              }}
            >
              A design system for creating better user experiences in
              application interfaces.
            </p>
            <Button url="/storybook/" type="main">
              Check it out
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
