import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import DateTime from '../../src/combined/DateTime';

function DateTimeStory() {
  // const [val, setValue] = useState(new Date());
  const [val, setValue] = useState(moment());

  const defaultProps = {
    name: 'time',
  };

  return (
    <DateTime
      {...defaultProps}
      onChange={({ target: { value } }) => {
        setValue(value);
        console.log(value.get('hour'));
        console.log(value.get('minute'));
      }}
      value={val}
    />
  );
}

storiesOf('Combined|DateTime', module).add('Simple', () => <DateTimeStory />);
