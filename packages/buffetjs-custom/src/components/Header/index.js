/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle, HeaderActions } from '@buffetjs/core';
import { Header as Wrapper } from '@buffetjs/styles';

function Header({ actions, content, title }) {
  const { label, cta } = title;

  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-6 header-title">
          <HeaderTitle title={label} cta={cta} />
          <p>{content}</p>
        </div>
        <div className="col-lg-6 justify-content-end">
          <HeaderActions actions={actions} />
        </div>
      </div>
    </Wrapper>
  );
}

Header.defaultProps = {
  actions: [],
  content: null,
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
  title: PropTypes.shape({
    cta: PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
    label: PropTypes.string,
  }),
};

export default Header;
