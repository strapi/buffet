/**
 *
 * Datepicker
 *
 */

import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DatePicker as StyledDatepicker } from '@buffetjs/styles';

import reducer, { initialState } from './reducer';

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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let date = null;
    let displayedDate = '';

    if (withDefaultValue && !value) {
      date = moment();
      displayedDate = date.format('MM/DD/YYYY');
    }

    if (!!value && moment(value).isValid()) {
      date = value._isAMomentObject === true ? value : moment(value);
      displayedDate = date.format('MM/DD/YYYY');
    }

    dispatch({
      type: 'SET_DATE',
      date,
    });

    dispatch({
      type: 'SET_DISPLAYED_DATE',
      displayedDate,
    });
  }, [value, withDefaultValue]);

  let timer = null;
  const { date, displayedDate, isFocused, isVisible } = state;

  const getDateValue = () => {
    let dateValue = date ? date.format(displayFormat) : '';

    if (isVisible) {
      dateValue = displayedDate;
    }

    return dateValue;
  };

  const handleChange = ({ target }) => {
    clearTimeout(timer);

    dispatch({
      type: 'SET_IS_FOCUSED',
      isFocused: false,
    });

    dispatch({
      type: 'SET_DISPLAYED_DATE',
      displayedDate: target.value,
    });

    timer = setTimeout(() => {
      // Clearing the input
      if (!target.value) {
        onChange({ target: { name, type: 'date', value: null } });

        dispatch({
          type: 'SET_DATE',
          date: null,
        });

        dispatch({
          type: 'SET_DISPLAYED_DATE',
          displayedDate: '',
        });

        return;
      }

      handleDateChange(moment(target.value, 'MM/DD/YYYY'));
    }, wait);
  };

  const handleDateChange = dateValue => {
    if (moment(dateValue).isValid()) {
      onChange({ target: { name, type: 'date', value: dateValue } });

      dispatch({
        type: 'SET_DATE',
        date: dateValue,
      });

      dispatch({
        type: 'SET_DISPLAYED_DATE',
        displayedDate: dateValue.format('MM/DD/YYYY'),
      });
    }
  };

  const handleDateClick = dateValue => {
    handleDateChange(dateValue);

    toggleDatepicker(false);
  };

  const handleTabClick = ({ keyCode, which }) => {
    const code = keyCode || which;

    if (code === 9) {
      toggleDatepicker(false);
    }
  };

  const toggleDatepicker = shown => {
    dispatch({
      type: 'SET_IS_VISIBLE',
      isVisible: shown,
    });

    dispatch({
      type: 'SET_IS_FOCUSED',
      isFocused: shown,
    });
  };

  return (
    <StyledDatepicker isOpen={isVisible} className={className}>
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
          onFocus={() => toggleDatepicker(true)}
          onClick={() => toggleDatepicker(true)}
          onKeyDown={handleTabClick}
          tabIndex={tabIndex}
        />
      </div>
      {isFocused && (
        <DayPickerSingleDateController
          date={date}
          focused
          numberOfMonths={1}
          onDateChange={handleDateClick}
          onOutsideClick={() => toggleDatepicker(false)}
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
  displayFormat: 'MMMM DD, YYYY',
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
