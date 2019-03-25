import React from 'react';

import DatePicker from '../../src/components/DatePicker';
import Form from '../components/Form';

export default class DatePickerStory extends React.Component {
  state = {
    value: null,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Form>
        <DatePicker
          name="inputDatePicker"
          onChange={this.handleChange}
          value={value}
        />
      </Form>
    );
  }
}
