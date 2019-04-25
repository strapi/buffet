/**
 *
 * Tab
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Tab({ index, selected, title, select }) {
  return (
    <li className={selected ? 'selected' : ''}>
      <button type="button" onClick={() => select(index)}>
        <p>{title}</p>
      </button>
    </li>
  );
}

Tab.defaultProps = {
  index: 0,
  select: () => {},
  selected: false,
  title: null,
};

Tab.propTypes = {
  index: PropTypes.number,
  select: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
};

export default Tab;
