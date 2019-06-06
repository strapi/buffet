/**
 *
 * TimePicker
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import { isInteger, toNumber } from 'lodash';
import PropTypes from 'prop-types';

import StyledTimePicker, {
  TimePickerWrapper,
  TimeList,
} from '../../styled/TimePicker';
import Icon from '../../styled/Icon';
import useEventListener from '../EventListener';
import useShortcutEffect from '../Shortcut';

// Convert time array to formatted time string
export const timeFormatter = time => {
  const newTime = Array(3)
    .fill('00')
    .concat(splitArray(time))
    .reverse();
  newTime.length = 3;

  return format(newTime).join(':');
};

// Convert time string to time array
const splitArray = string => {
  if (isInteger(toNumber(string)) && string) {
    const stringFormat = string.length === 3 ? `0${string}` : string;

    return stringFormat.match(/.{1,2}/g).reverse();
  }

  const lowercase = string ? string.toLowerCase() : '0';
  const array = lowercase.includes('h')
    ? lowercase.split('h')
    : lowercase.split(':');

  return array.reverse().filter(v => !!v);
};

// Ensure two-digit format for minutes and seconds
const format = array =>
  array.map((string, i) => {
    if (string.length < 2) {
      return i === 0 ? `0${string}` : `${string}0`;
    }

    return string;
  });

// Hide seconds if needed
const short = hour => {
  const array = hour.split(':');
  if (array.length > 2) {
    return array.slice(0, -1).join(':');
  }

  return hour;
};

// Generate options for TimeList display
const getOptions = () => {
  const hours = Array.from({ length: 24 }, (_, k) => k);
  const options = hours.reduce((acc, cur) => {
    const hour = cur < 10 ? `0${cur}` : cur;

    return acc.concat([
      { value: `${hour}:00:00`, label: `${hour}:00` },
      { value: `${hour}:30:00`, label: `${hour}:30` },
    ]);
  }, []);

  return options;
};

// Find the nearest time option to select a TimeList value
const roundHour = time => {
  const arr = splitArray(time);
  const nearMin = nearest([0, 30, 60], parseInt(arr[1], 10));

  arr[1] = nearMin !== 30 ? '00' : '30';
  arr[2] = nearMin === 60 ? `${parseInt(arr[2], 10) + 1}` : arr[2];

  return format(arr.reverse()).join(':');
};

// Set the nearest option to select a TimeList value
const nearest = (arr, val) =>
  arr.reduce(
    (p, n) => (Math.abs(p) > Math.abs(n - val) ? n - val : p),
    Infinity,
  ) + val;

function TimePicker(props) {
  const { name, onChange, seconds, value } = props;
  const [inputVal, setInputVal] = useState(seconds ? value : short(value));
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();
  const wrapperRef = useRef();
  const listRefs = getOptions().reduce((acc, curr) => {
    acc[curr.value] = useRef();

    return acc;
  }, {});
  const currentTimeSelected = roundHour(timeFormatter(inputVal));

  // Effect to enable scrolling
  useEffect(() => {
    if (isOpen) {
      const currentRef = currentTimeSelected;
      listRefs[currentRef].current.scrollIntoView({
        block: 'start',
      });
    }
  }, [isOpen, currentTimeSelected]);

  // Custom hook to close the TimeList
  useEventListener('click', event => {
    if (!wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  });

  // Custom hook to select a time using the keyboard's up arrow
  useShortcutEffect('arrowUp', () => {
    if (isOpen) {
      const currentTimeIndex = getOptions().findIndex(
        o => o.value === currentTimeSelected,
      );
      const optionsLength = getOptions().length;
      const nextTime =
        currentTimeIndex === optionsLength - 1
          ? getOptions()[optionsLength - 1]
          : getOptions()[currentTimeIndex + 1];

      updateTime(nextTime.value);
    }
  });

  // Custom hook to select a time using the keyboard's down arrow
  useShortcutEffect('arrowDown', () => {
    if (isOpen) {
      const currentTimeIndex = getOptions().findIndex(
        o => o.value === currentTimeSelected,
      );
      const nextTime =
        currentTimeIndex === 0
          ? getOptions()[0]
          : getOptions()[currentTimeIndex - 1];

      updateTime(nextTime.value);
    }
  });

  // Custom hook to close the time list
  useShortcutEffect('enter', () => {
    if (isOpen) {
      setIsOpen(false);
      inputRef.current.blur();
    }
  });

  const handleChange = ({ target }) => {
    updateTime(target.value);
  };

  const formatInputValue = time => {
    if (!seconds) {
      setInputVal(short(time));
    } else {
      setInputVal(time);
    }
  };

  const handleClick = ({ target }) => {
    updateTime(target.value);
    setIsOpen(false);
  };

  const updateTime = time => {
    formatInputValue(time);
    onChange({
      target: {
        name,
        type: 'text',
        value: timeFormatter(time),
      },
    });
  };

  return (
    <TimePickerWrapper ref={wrapperRef}>
      <StyledTimePicker
        {...props}
        autoComplete="off"
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        ref={inputRef}
        type="text"
        value={inputVal}
      />
      <Icon type="time" />
      <TimeList className={isOpen && 'displayed'}>
        {getOptions().map(option => (
          <li key={option.value} ref={listRefs[option.value]}>
            <input
              type="radio"
              onChange={handleClick}
              value={option.value}
              id={option.value}
              name="time"
              checked={option.value === roundHour(timeFormatter(inputVal))}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </li>
        ))}
      </TimeList>
    </TimePickerWrapper>
  );
}

TimePicker.defaultProps = {
  onChange: () => {},
  seconds: false,
  value: '',
};

TimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  seconds: PropTypes.bool,
  value: PropTypes.string,
};

export default TimePicker;
