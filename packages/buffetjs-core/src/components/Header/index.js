/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header as Wrapper } from '@buffetjs/styles';

function Header({ title, content, callToAction }) {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-6 header-title">
          {title}
          {content}
        </div>
        <div className="col-lg-6 justify-content-end">{callToAction}</div>
      </div>
    </Wrapper>
  );
}

Header.defaultProps = {
  callToAction: null,
  content: null,
  title: null,
};

Header.propTypes = {
  callToAction: PropTypes.node,
  content: PropTypes.node,
  title: PropTypes.node,
};

export default Header;
