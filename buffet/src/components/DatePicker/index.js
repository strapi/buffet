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
import { SingleDatePicker } from 'react-dates';
import {
  uncontrolledDefaultProps,
  uncontrolledPropTypes,
} from '../../commonPropTypes/input';

import Datepicker from '../../styled/Datepicker';

class DatePicker extends React.PureComponent {
  state = { date: null, isFocused: false };

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
      this.setState({ date }, () =>
        onChange({ target: { name, type: 'date', value: date } }),
      );
    }
  };

  handleFocusChange = ({ focused }) => {
    /* istanbul ignore next */
    this.setState({ isFocused: focused });
  };

  render() {
    const { displayFormat, id } = this.props;
    const { date, isFocused } = this.state;

    return (
      <Datepicker>
        <SingleDatePicker
          date={date}
          focused={isFocused}
          id={id || 'date'}
          displayFormat={displayFormat}
          numberOfMonths={1}
          onFocusChange={this.handleFocusChange}
          onDateChange={this.handleDateChange}
        />
      </Datepicker>
    );
  }
}

DatePicker.defaultProps = {
  ...uncontrolledDefaultProps,
  displayFormat: 'MMMM DD YY',
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
