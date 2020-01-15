import React, { useState } from 'react';
import moment from 'moment';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { TimePicker } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function TimePickerStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'time',
  };

  return (
    <Presentation title="TimePicker" description="Let the user select a time.">
      <div style={{ marginBottom: 23 }}>
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
          step={15}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import moment from 'moment';
import { TimePicker } from '@buffetjs/core';

function Example() {
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
}
        `}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('TimePicker', () => <TimePickerStory />);
