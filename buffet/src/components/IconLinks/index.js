/**
 *
 * IconLinks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledLinks from '../../styled/Links';

function IconLinks({ links }) {
  return (
    <StyledLinks>
      {links.map(icon => (
        <button key={icon.icon} onClick={icon.onClick} type="button">
          <i className={`${icon.icon} link-icon`} />
        </button>
      ))}
    </StyledLinks>
  );
}

IconLinks.defaultProps = {
  links: null,
};
IconLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};

export default IconLinks;
