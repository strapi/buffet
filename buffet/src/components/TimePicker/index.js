/**
 *
 * TimePicker
 *
 */

import React, { useState } from 'react';
import { isInteger, toNumber } from 'lodash';
import PropTypes from 'prop-types';

import StyledTimePicker, { TimePickerWrapper } from '../../styled/TimePicker';
import Icon from '../../styled/Icon';
import TimeList from '../TimeList';

export const timeFormatter = time => {
  const newTime = Array(3)
    .fill('00')
    .concat(splitArray(time))
    .reverse();
  newTime.length = 3;

  return format(newTime).join(':');
};

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

const format = array =>
  array.map((string, i) => {
    if (string.length < 2) {
      return i === 0 ? `0${string}` : `${string}0`;
    }

    return string;
  });

const short = hour => {
  const array = hour.split(':');
  if (array.length > 2) {
    return array.slice(0, -1).join(':');
  }

  return hour;
};

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

const nearest = (arr, val) =>
  arr.reduce(
    (p, n) => (Math.abs(p) > Math.abs(n - val) ? n - val : p),
    Infinity,
  ) + val;

const roundHour = time => {
  const arr = splitArray(time);
  const nearMin = nearest([0, 30, 60], parseInt(arr[1], 10));

  arr[1] = nearMin !== 30 ? '00' : '30';
  arr[2] = nearMin === 60 ? `${parseInt(arr[2], 10) + 1}` : arr[2];

  return format(arr.reverse()).join(':');
};

function TimePicker(props) {
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);

  const [inputVal, setInputVal] = useState('');

  const { name, onChange, seconds, value } = props;

  const handleBlur = () => {
    if (changed) {
      onChange({
        target: {
          name,
          type: 'text',
          value: value ? timeFormatter(value) : '',
        },
      });
      setChanged(false);
      formatInputValue(timeFormatter(value));
    }
    setFocused(false);
  };

  const handleChange = ({ target }) => {
    setChanged(true);
    onChange({
      target: {
        name,
        type: 'text',
        value: timeFormatter(target.value),
      },
    });
    formatInputValue(target.value);
  };

  const formatInputValue = time => {
    if (!seconds) {
      setInputVal(short(time));
    } else {
      setInputVal(time);
    }
  };

  return (
    <TimePickerWrapper>
      <StyledTimePicker
        {...props}
        autoComplete="off"
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={() => setFocused(true)}
        onKeyPress={e => (e.key === 'Enter' ? handleBlur(e) : '')}
        type="text"
        value={inputVal}
      />
      <Icon type="time" />
      <TimeList
        isOpen={focused}
        options={getOptions()}
        onClick={handleChange}
        value={roundHour(timeFormatter(value))}
      />
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
