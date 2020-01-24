/**
 *
 * DateTime
 *
 */

import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import { DatePicker, TimePicker } from '@buffetjs/core';
import Wrapper from './Wrapper';

const UNITS = ['hour', 'minute', 'second'];
export const getTimeString = time => {
  if (!time) {
    return '';
  }

  const currTime = time || moment();

  const timeObj = getTimeObject(currTime);
  const timeString = Object.keys(timeObj)
    .map(key => (timeObj[key] < 10 ? `0${timeObj[key]}` : timeObj[key]))
    .join(':');

  return timeString;
};
export const getTimeObject = time => {
  const timeObj = {};

  UNITS.forEach(unit => {
    timeObj[unit] = time.get(unit);
  });

  return timeObj;
};

function DateTime({ disabled, name, onChange, value, tabIndex, ...rest }) {
  const [timestamp, setTimestamp] = useState('');
  const [isInit, setIsInit] = useState(false);
  const setTime = time => {
    const [hour, minute, second] = time.split(':');
    const timeObj = {
      hour,
      minute,
      second,
    };
    const currentDate = timestamp || moment();

    currentDate.set(timeObj);
    setDate(currentDate);
  };

  const setDate = useMemo(
    () => (date, time) => {
      const newDate = time || date;
      date.set(getTimeObject(newDate));
      date.toISOString();
      date.format();

      setTimestamp(date);

      onChange({ target: { name, type: 'datetime', value: date } });
    },
    [name, onChange]
  );

  useEffect(() => {
    if (!!value && moment(value).isValid()) {
      const newDate = value._isAMomentObject === true ? value : moment(value);

      setDate(newDate);
    }
    setIsInit(true);
  }, [setDate, value]);

  if (!isInit) {
    return null;
  }

  return (
    <Wrapper>
      <DatePicker
        {...rest}
        name="datetime"
        disabled={disabled}
        onChange={({ target }) => {
          setDate(target.value, timestamp);
        }}
        tabIndex={tabIndex}
        value={timestamp}
      />
      <TimePicker
        name="time"
        disabled={disabled}
        onChange={({ target }) => {
          setTime(target.value);
        }}
        seconds={false}
        tabIndex={tabIndex}
        value={getTimeString(timestamp)}
      />
    </Wrapper>
  );
}

DateTime.defaultProps = {
  autoFocus: false,
  disabled: false,
  id: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  value: null,
  withDefaultValue: false,
};

DateTime.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([
    momentPropTypes.momentObj,
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  withDefaultValue: PropTypes.bool,
};

export default DateTime;
