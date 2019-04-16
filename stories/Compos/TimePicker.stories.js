import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import TimePicker from '../../src/components/TimePicker';

function TimePickerStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'time',
  };

  return (
    <TimePicker
      {...defaultProps}
      onChange={({ target: { value } }) => {
        console.log(value);
        setValue(value);
      }}
      seconds={false}
      value={val}
    />
  );
}

storiesOf('Components|TimePicker', module).add('Simple', () => (
  <TimePickerStory />
));
