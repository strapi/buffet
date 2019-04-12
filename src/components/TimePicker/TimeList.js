/**
 *
 * TimeList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { TimeList as StyledTimeList } from '../../styled/TimePicker';

function TimeList({ isOpen, options, onClick, value }) {
  return (
    <StyledTimeList className={isOpen && 'displayed'}>
      {options.map(option => (
        <li key={option.value}>
          <input
            type="radio"
            onChange={onClick}
            value={option.value}
            name="time"
            checked={option.value === value}
          />
          <div>{option.label}</div>
        </li>
      ))}
    </StyledTimeList>
  );
}

TimeList.defaultProps = {
  isOpen: false,
  options: [],
  onClick: () => {},
  value: null,
};

TimeList.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default TimeList;
