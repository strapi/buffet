/**
 *
 * Header
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle, HeaderActions } from '@buffetjs/core';
import { Header as Wrapper, LoadingBar } from '@buffetjs/styles';

function Header({ actions, content, isLoading, stickable, title }) {
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const headerRef = useRef(null);

  const { label, cta } = title;

  const handleScroll = () => {
    if (headerRef.current) {
      setHeaderSticky(headerRef.current.getBoundingClientRect().top <= 20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={headerRef}>
      <div
        className={`sticky-wrapper${
          isHeaderSticky && stickable ? ' sticky' : ''
        }`}
      >
        <div className="row">
          <div className="col-sm-6 header-title">
            <HeaderTitle title={label} cta={cta} />
            {isLoading ? <LoadingBar /> : <p>{content}</p>}
          </div>
          <div className="col-sm-6 justify-content-end">
            <HeaderActions actions={actions} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Header.defaultProps = {
  actions: [],
  content: null,
  isLoading: false,
  stickable: true,
  title: {
    label: null,
    cta: null,
  },
};

Header.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      title: PropTypes.string,
    })
  ),
  content: PropTypes.string,
  isLoading: PropTypes.bool,
  stickable: PropTypes.bool,
  title: PropTypes.shape({
    cta: PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
    label: PropTypes.string,
  }),
};

export default Header;
