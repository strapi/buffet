import React, { useState } from 'react';
import moment from 'moment';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import TimePicker from '../../src/components/TimePicker';
import Presentation from '../ui/Presentation';

function TimePickerStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'time',
  };

  return (
    <Presentation title="TimePicker">
      <TimePicker
        {...defaultProps}
        onChange={({ target: { value } }) => {
          const hour = moment(value, 'HH:mm:ss');
          hour.toISOString();
          hour.format();
          setValue(value);
        }}
        seconds={false}
        value={val}
      />
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { TimePicker } from 'buffet';

function TimePickerStory() {
  const [val, setValue] = useState('');

  return (
    <TimePicker
      name="time"
      onChange={({ target: { value } }) => {
        const hour = moment(value, 'HH:mm:ss');
        hour.toISOString();
        hour.format();
        setValue(value);
      }}
      seconds={false}
      value={val}
    />
  );
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('TimePicker', () => <TimePickerStory />);
