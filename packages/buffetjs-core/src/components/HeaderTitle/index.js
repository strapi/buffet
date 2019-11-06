/**
 *
 * HeaderTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle as Wrapper } from '@buffetjs/styles';

function HeaderTitle({ title, children, cta }) {
  const content = title || children;
  const renderCTA = () => {
    if (cta) {
      const { icon, onClick } = cta;

      return (
        <i className={`${icon}`} onClick={onClick} role="button" tabIndex="0" />
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <h1>
        {content}
        {renderCTA()}
      </h1>
    </Wrapper>
  );
}

HeaderTitle.defaultProps = {
  children: null,
  cta: null,
  title: null,
};

HeaderTitle.propTypes = {
  children: PropTypes.node,
  cta: PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
  title: PropTypes.string,
};

export default HeaderTitle;
