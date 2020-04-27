/* eslint-disable react/no-array-index-key */
/**
 *
 * IconLinks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Links as StyledLinks } from '@buffetjs/styles';
import Icon from '../Icon';

function IconLinks({ links }) {
  return (
    <StyledLinks>
      {links.map(({ icon, onClick }, index) => (
        <button key={index} onClick={onClick} type="button">
          <Icon className="link-icon" icon={icon} />
        </button>
      ))}
    </StyledLinks>
  );
}

IconLinks.defaultProps = {
  links: [],
};

IconLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      onClick: PropTypes.func,
    })
  ),
};

export default IconLinks;
