/**
 *
 * DatePicker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker as StyledDatepicker } from '@buffetjs/styles';
import Input from '../InputText';

class DatePicker extends React.PureComponent {
  state = { date: null, displayedDate: '', isFocused: false, visible: false };

  timer = null;

  componentDidMount() {
    const { value, withDefaultValue } = this.props;
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

    this.setState({ date, displayedDate });
  }

  // Temporary fix it the component will be migrated to react hooks in another PR
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      const { value, withDefaultValue } = this.props;
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

      // Disabling this rule as it this component will be updated in the upcoming
      // ui improvement PR
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ date, displayedDate });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ displayedDate: target.value });

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.handleDateChange(moment(target.value));
    }, this.props.wait);
  };

  handleDateChange = date => {
    const { name, onChange } = this.props;

    if (moment(date).isValid()) {
      this.setState(
        { date, displayedDate: date.format('MM/DD/YYYY'), visible: true },
        () => onChange({ target: { name, type: 'date', value: date } })
      );
    }
  };

  handleFocusChange = ({ focused }) => {
    /* istanbul ignore next */
    this.setState({ isFocused: focused });
  };

  handleOutsideClick = () => {
    this.setState({
      visible: false,
    });
  };

  handleTabClick = ({ keyCode, which }) => {
    const code = keyCode || which;

    if (code === 9) {
      this.handleOutsideClick();
    }
  };

  showDatepicker = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const {
      className,
      disabled,
      displayFormat,
      id,
      name,
      readOnly,
      tabIndex,
    } = this.props;
    const { date, displayedDate, isFocused, visible } = this.state;
    let dateValue = date ? moment(date).format(displayFormat) : '';

    if (visible) {
      dateValue = displayedDate;
    }

    return (
      <StyledDatepicker className={`${className} ${visible && 'is-open'}`}>
        <div>
          <Input
            disabled={disabled}
            type="text"
            name="start_date"
            id={id || name}
            value={dateValue}
            readOnly={readOnly}
            onChange={this.handleChange}
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
            onClick={this.showDatepicker}
            onFocus={this.showDatepicker}
            onKeyDown={this.handleTabClick}
            tabIndex={tabIndex}
          />
        </div>
        {visible && (
          <DayPickerSingleDateController
            date={date}
            focused={isFocused}
            numberOfMonths={1}
            keepOpenOnDateSelect
            onFocusChange={this.handleFocusChange}
            onDateChange={this.handleDateChange}
            onOutsideClick={this.handleOutsideClick}
          />
        )}
      </StyledDatepicker>
    );
  }
}

DatePicker.defaultProps = {
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

DatePicker.propTypes = {
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

export default DatePicker;
