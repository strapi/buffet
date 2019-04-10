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

import Datepicker from '../../styled/Datepicker';

/* eslint-disable react/prefer-stateless-function */
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

    this.setState({ date });

    onChange({ target: { name, type: 'date', value: date } });
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
          id={id}
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
  displayFormat: 'MMMM DD YY',
  id: 'date',
  onChange: () => {},
  value: null,
  withDefaultValue: true,
};

DatePicker.propTypes = {
  displayFormat: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([momentPropTypes.momentObj, PropTypes.string]),
  withDefaultValue: PropTypes.bool,
};

export default DatePicker;
