import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import DatePicker from '../../src/components/DatePicker';

const defaultProps = {
  name: 'date',
};

class DatePickerStory extends React.Component {
  state = {
    value: {
      date: '',
    },
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <DatePicker
        {...defaultProps}
        onChange={this.handleChange}
        value={value.date}
      />
    );
  }
}

storiesOf('Components|DatePicker', module).add('Simple', () => (
  <DatePickerStory />
));
