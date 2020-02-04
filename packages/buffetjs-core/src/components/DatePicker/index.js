/**
 *
 * Datepicker
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker as StyledDatepicker } from '@buffetjs/styles';
import Input from '../InputText';

function Datepicker({
  className,
  value,
  withDefaultValue,
  disabled,
  displayFormat,
  id,
  name,
  onChange,
  readOnly,
  tabIndex,
  wait,
}) {
  const [state, setState] = useState({
    date: null,
    displayedDate: '',
    isFocused: false,
    visible: false,
    visibleDate: '',
  });
  let timer = null;

  useEffect(() => {
    let date = null;
    let displayedDate = '';

    console.log(value);

    if (withDefaultValue && !value) {
      date = moment();
      displayedDate = date.format('MM/DD/YYYY');
    }

    if (!!value && moment(value).isValid()) {
      date = value._isAMomentObject === true ? value : moment(value);
      displayedDate = date.format('MM/DD/YYYY');
    }

    setState(prevState => ({ ...prevState, date, displayedDate }));
  }, []);

  const getDateValue = () => {
    const { date, displayedDate, visible } = state;
    let dateValue = date ? moment(date).format(displayFormat) : '';

    if (visible) {
      dateValue = displayedDate;
    }

    return dateValue;
  };

  const getVisibleDate = date => {
    const month = moment(date).month() + 1;
    const year = moment(date).year();

    return moment(`${month} ${year}`, 'MM YYYY');
  };

  const handleChange = ({ target }) => {
    clearTimeout(timer);

    setState(prevState => ({
      ...prevState,
      displayedDate: target.value,
      isFocused: false,
    }));

    timer = setTimeout(() => {
      handleDateChange(moment(target.value));
    }, wait);
  };

  const handleDateChange = date => {
    if (moment(date).isValid()) {
      onChange({ target: { name, type: 'date', value: date } });

      console.log(date);
      setState(prevState => ({
        ...prevState,
        date,
        displayedDate: date.format('MM/DD/YYYY'),
      }));
    }
  };

  const handleDateClick = date => {
    handleDateChange(date);

    toggleDatepicker();
  };

  const handleOutsideClick = () => {
    toggleDatepicker();
  };

  const handleTabClick = ({ keyCode, which }) => {
    const code = keyCode || which;

    if (code === 9) {
      handleOutsideClick();
    }
  };

  const toggleDatepicker = () => {
    setState(prevState => ({
      ...prevState,
      visible: !prevState.visible,
      isFocused: !prevState.isFocused,
    }));
  };

  return (
    <StyledDatepicker className={`${className} ${state.visible && 'is-open'}`}>
      <div>
        <Input
          disabled={disabled}
          type="text"
          name="start_date"
          id={id || name}
          value={getDateValue()}
          readOnly={readOnly}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faCalendarAlt} />}
          onClick={toggleDatepicker}
          onKeyDown={handleTabClick}
          tabIndex={tabIndex}
        />
      </div>
      {state.isFocused && (
        <DayPickerSingleDateController
          date={state.date}
          focused
          numberOfMonths={1}
          onDateChange={handleDateClick}
          onOutsideClick={handleOutsideClick}
          initialVisibleMonth={() => getVisibleDate(state.date)}
          daySize={37}
          transitionDuration={0}
        />
      )}
    </StyledDatepicker>
  );
}

Datepicker.defaultProps = {
  className: null,
  disabled: false,
  displayFormat: 'MMMM DD, YY',
  id: 'date',
  onChange: () => {},
  readOnly: false,
  tabIndex: '0',
  value: null,
  wait: 600,
  withDefaultValue: false,
};

Datepicker.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  displayFormat: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([momentPropTypes.momentObj, PropTypes.string]),
  wait: PropTypes.number,
  withDefaultValue: PropTypes.bool,
};

export default Datepicker;
