/**
 *
 * NavTabs
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab as StyledTab, colors } from '@buffetjs/styles';
import { gradient } from '@buffetjs/utils';

function NavTabs({ links }) {
  let color = colors.greyLink;

  return (
    <ul>
      {links.map((link, index) => {
        color = gradient(color, 1.5);
        const content = link.label ? <p>{link.label}</p> : link.compo || null;

        return (
          <StyledTab
            key={link.to}
            index={index}
            count={links.length}
            background={color}
          >
            <NavLink to={link.to}>{content}</NavLink>
          </StyledTab>
        );
      })}
    </ul>
  );
}

NavTabs.defaultProps = {
  links: [],
};

NavTabs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      compo: PropTypes.node,
      label: PropTypes.string,
      to: PropTypes.string,
    })
  ),
};

export default NavTabs;
