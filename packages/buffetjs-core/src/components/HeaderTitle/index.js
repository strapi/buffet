/**
 *
 * HeaderTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { upperFirst } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { HeaderTitle as Wrapper } from '@buffetjs/styles';

function HeaderTitle({ title, children, cta }) {
  const content = upperFirst(title) || children;
  const renderCTA = () => {
    if (cta) {
      const { onClick } = cta;

      return (
        <FontAwesomeIcon
          icon={faPencilAlt}
          onClick={onClick}
          role="button"
          tabIndex="0"
          size="sm"
        />
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
    onClick: PropTypes.func,
  }),
  title: PropTypes.string,
};

export default HeaderTitle;
