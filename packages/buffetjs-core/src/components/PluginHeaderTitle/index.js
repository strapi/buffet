import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function PluginHeaderTitle({ title, cta }) {
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

PluginHeaderTitle.defaultProps = {
  cta: null,
  title: null,
};

PluginHeaderTitle.propTypes = {
  cta: PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
  title: PropTypes.string,
};

export default PluginHeaderTitle;
