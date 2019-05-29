/**
 *
 * DateTime
 *
 */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';

import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';
import Wrapper from './Wrapper';

const UNITS = ['hour', 'minute', 'second'];

function DateTime({ name, onChange, value }) {
  const [timestamp, setTimestamp] = useState();

  const getTimeString = time => {
    const currTime = time || moment();

    const timeObj = getTimeObject(currTime);
    const timeString = Object.keys(timeObj)
      .map(key => (timeObj[key] < 10 ? `0${timeObj[key]}` : timeObj[key]))
      .join(':');

    return timeString;
  };

  const getTimeObject = time => {
    const timeObj = {};

    UNITS.forEach(unit => {
      timeObj[unit] = time.get(unit);
    });

    return timeObj;
  };

  const setTime = time => {
    const [hour, minute, second] = time.split(':');
    const timeObj = {
      hour,
      minute,
      second,
    };

    timestamp.set(timeObj);
    setDate(timestamp);
  };

  const setDate = (date, time) => {
    const newDate = time || date;
    date.set(getTimeObject(newDate));
    date.toISOString();
    date.format();
    setTimestamp(date);

    onChange({ target: { name, type: 'date', value: date } });
  };

  useEffect(() => {
    if (!!value && moment(value).isValid()) {
      const newDate = value._isAMomentObject === true ? value : moment(value);
      setDate(newDate);
    }
  }, [setDate, value]);

  return (
    <Wrapper>
      <DatePicker
        name="date"
        onChange={({ target }) => {
          setDate(target.value, timestamp);
        }}
        value={timestamp}
      />
      <TimePicker
        name="time"
        onChange={({ target }) => {
          setTime(target.value);
        }}
        seconds={false}
        value={getTimeString(timestamp)}
      />
    </Wrapper>
  );
}

DateTime.defaultProps = {
  ...commonDefaultProps,
  onChange: () => {},
  value: null,
};

DateTime.propTypes = {
  ...commonPropTypes,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    momentPropTypes.momentObj,
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};

export default DateTime;
