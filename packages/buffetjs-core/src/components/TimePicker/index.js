/**
 *
 * TimePicker
 *
 */

import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { isInteger, toNumber } from 'lodash';
import PropTypes from 'prop-types';

import {
  IconWrapper,
  TimePicker as StyledTimePicker,
  TimePickerWrapper,
  TimeList,
} from '@buffetjs/styles';
import { useEventListener, useShortcutEffect } from '@buffetjs/hooks';
import Icon from '../Icon';

const MINUTES_IN_HOUR = 60;

// Returns string with two digits padded at start with 0
const pad = num => `0${num}`.substr(-2);

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

// return array of minutes in hours with current step
const getMinutesArr = step => {
  const length = MINUTES_IN_HOUR / step;

  return Array.from({ length }, (_v, i) => step * i);
};

// Generate options for TimeList display
const getOptions = step => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = getMinutesArr(step);

  const options = hours.reduce((acc, cur) => {
    const hour = pad(cur);

    const hourOptions = minutes.map(minute => {
      const label = `${hour}:${pad(minute)}`;

      return { value: `${label}:00`, label };
    });

    return acc.concat(hourOptions);
  }, []);

  return options;
};

// Find the nearest time option to select a TimeList value
const roundHour = (time, step) => {
  const arr = splitArray(time);
  const minutesArr = getMinutesArr(step);
  const nearMin = nearest(
    minutesArr.concat(MINUTES_IN_HOUR),
    parseInt(arr[1], 10)
  );

  arr[1] = minutesArr.includes(arr[1]) ? '00' : pad(nearMin);
  arr[2] = nearMin === 60 ? `${parseInt(arr[2], 10) + 1}` : arr[2];

  return format(arr.reverse()).join(':');
};

// Set the nearest option to select a TimeList value
const nearest = (arr, val) =>
  arr.reduce(
    (p, n) => (Math.abs(p) > Math.abs(n - val) ? n - val : p),
    Infinity
  ) + val;

function TimePicker(props) {
  const { name, onChange, seconds, tabIndex, value, step } = props;
  const [inputVal, setInputVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = useMemo(() => getOptions(step), [step]);
  const inputRef = useRef();
  const wrapperRef = useRef();
  const listRef = useRef();
  const listRefs = options.reduce((acc, curr) => {
    acc[curr.value] = useRef();

    return acc;
  }, {});

  const currentTimeSelected = useMemo(
    () => roundHour(timeFormatter(inputVal), step),
    [inputVal, step]
  );

  // Effect to set the time
  useEffect(() => {
    if (!isOpen) {
      const time = seconds ? value : short(value);

      setInputVal(time);
    }
  }, [value, seconds, isOpen]);

  // Effect to enable scrolling
  useEffect(() => {
    const currentRef = currentTimeSelected;

    if (isOpen && listRefs[currentRef]) {
      listRef.current.scrollTop = listRefs[currentRef].current.offsetTop;
    }
  }, [isOpen, currentTimeSelected, listRefs]);

  // Custom hook to close the TimeList
  useEventListener(
    'click',
    event => {
      if (!wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    isOpen
  );

  // Custom hook to select a time using the keyboard's up arrow
  useShortcutEffect(
    'arrowUp',
    () => {
      if (isOpen) {
        const currentIndex = options.findIndex(
          o => o.value === currentTimeSelected
        );
        if (!currentIndex) return;
        const nextIndex = currentIndex - 1;

        const nextTime = options[nextIndex] || options[currentIndex];

        updateTime(nextTime.value);
      }
    },
    isOpen
  );

  // Custom hook to select a time using the keyboard's down arrow
  useShortcutEffect(
    'arrowDown',
    () => {
      if (isOpen) {
        const currentIndex = options.findIndex(
          o => o.value === currentTimeSelected
        );
        const lastIndex = options.length - 1;
        if (currentIndex >= lastIndex) return;
        const nextIndex = currentIndex + 1;

        const nextTime = options[nextIndex] || options[lastIndex];

        updateTime(nextTime.value);
      }
    },
    isOpen
  );

  // Custom hook to close the time list
  useShortcutEffect(
    'enter',
    () => {
      if (isOpen) {
        setIsOpen(false);
        inputRef.current.blur();
      }
    },
    isOpen
  );

  useShortcutEffect(
    'tab',
    () => {
      if (isOpen) {
        setIsOpen(false);
        inputRef.current.blur();
      }
    },
    isOpen
  );

  const handleChange = ({ target }) => {
    updateTime(target.value);
  };

  const handleChangeRadio = useCallback(() => {}, []);

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
        type: 'time',
        value: timeFormatter(time),
      },
    });
  };

  return (
    <TimePickerWrapper ref={wrapperRef} className={props.className}>
      <StyledTimePicker
        {...props}
        autoComplete="off"
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        ref={inputRef}
        type="text"
        value={inputVal}
        tabIndex={tabIndex}
      />
      <IconWrapper>
        <Icon icon="time" />
      </IconWrapper>
      <TimeList className={isOpen && 'displayed'} ref={listRef}>
        {isOpen &&
          options.map(option => (
            <li key={option.value} ref={listRefs[option.value]}>
              <input
                type="radio"
                onChange={handleChangeRadio}
                onClick={handleClick}
                value={option.value}
                id={option.value}
                name="time"
                checked={option.value === currentTimeSelected}
                tabIndex="0"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </li>
          ))}
      </TimeList>
    </TimePickerWrapper>
  );
}

TimePicker.defaultProps = {
  className: null,
  onChange: () => {},
  tabIndex: '0',
  seconds: false,
  value: '',
  step: 30,
};

TimePicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  seconds: PropTypes.bool,
  step: (props, propName) =>
    MINUTES_IN_HOUR % props[propName] > 0 &&
    new Error('step should be divisible by 60'),
  tabIndex: PropTypes.string,
  value: PropTypes.string,
};

export default TimePicker;
