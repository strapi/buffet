import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import DatePicker from '../../src/components/DatePicker';

function DatePickerStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'date',
  };

  return (
    <DatePicker
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|DatePicker', module).add('Simple', () => (
  <DatePickerStory />
));
