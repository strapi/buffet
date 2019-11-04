/**
 *
 * HeaderTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle as Wrapper } from '@buffetjs/styles';

function HeaderTitle({ title, cta }) {
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
        {title}
        {renderCTA()}
      </h1>
    </Wrapper>
  );
}

HeaderTitle.defaultProps = {
  cta: null,
  title: null,
};

HeaderTitle.propTypes = {
  cta: PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
  title: PropTypes.string,
};

export default HeaderTitle;
