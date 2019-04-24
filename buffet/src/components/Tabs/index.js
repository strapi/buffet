/**
 *
 * Tabs
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledTabs from '../../styled/Tabs';
import Tab from '../Tab';

function Tabs({ children, current }) {
  const [selected, setSelected] = useState(current);

  return (
    <StyledTabs count={children.length}>
      <ul>
        {children.map((elem, index) => (
          <Tab
            key={elem.props.title}
            index={index}
            selected={index === selected}
            title={elem.props.title}
            select={() => setSelected(index)}
          />
        ))}
      </ul>
      <div className="tab-panel">{children[selected]}</div>
    </StyledTabs>
  );
}

Tabs.defaultProps = {
  children: [],
  current: 0,
};
Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  current: PropTypes.number,
};

export default Tabs;
