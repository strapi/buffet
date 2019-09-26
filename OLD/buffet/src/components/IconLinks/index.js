/**
 *
 * IconLinks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledLinks from '../../styled/Links';
import Icon from '../Icon';

function IconLinks({ links }) {
  return (
    <StyledLinks>
      {links.map((icon, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <button key={index} onClick={icon.onClick} type="button">
          <Icon className="link-icon" icon={icon.icon} />
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
    }),
  ),
};

export default IconLinks;
