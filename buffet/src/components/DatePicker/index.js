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
import {
  uncontrolledDefaultProps,
  uncontrolledPropTypes,
} from '../../commonPropTypes/input';
import Input from '../InputText';

import Datepicker from '../../styled/Datepicker';

class DatePicker extends React.PureComponent {
  state = { date: null, isFocused: false, visible: false };

  componentDidMount() {
    const { value, withDefaultValue } = this.props;
    let date = null;

    if (withDefaultValue && !value) {
      date = moment();
    }

    if (!!value && moment(value).isValid()) {
      date = value._isAMomentObject === true ? value : moment(value);
    }

    this.setState({ date });
  }

  handleDateChange = date => {
    const { name, onChange } = this.props;
    if (moment(date).isValid()) {
      this.setState({ date, visible: false }, () =>
        onChange({ target: { name, type: 'date', value: date } }),
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

  showDatepicker = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { className, displayFormat, id, name } = this.props;
    const { date, isFocused, visible } = this.state;

    return (
      <Datepicker className={className}>
        <div>
          <Input
            type="text"
            name="start_date"
            id={id || name}
            value={moment(date).format(displayFormat)}
            readOnly
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
            onClick={this.showDatepicker}
          />
        </div>
        {visible && (
          <DayPickerSingleDateController
            date={date}
            focused={isFocused}
            numberOfMonths={1}
            onFocusChange={this.handleFocusChange}
            onDateChange={this.handleDateChange}
            onOutsideClick={this.handleOutsideClick}
          />
        )}
      </Datepicker>
    );
  }
}

DatePicker.defaultProps = {
  ...uncontrolledDefaultProps,
  displayFormat: 'MMMM DD, YY',
  id: 'date',
  value: null,
  withDefaultValue: true,
};

DatePicker.propTypes = {
  ...uncontrolledPropTypes,
  displayFormat: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([momentPropTypes.momentObj, PropTypes.string]),
  withDefaultValue: PropTypes.bool,
};

export default DatePicker;
