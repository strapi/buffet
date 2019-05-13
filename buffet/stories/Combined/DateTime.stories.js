import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import DateTime from '../../src/combined/DateTime';

function DateTimeStory() {
  const [val, setValue] = useState(new Date());
  // const [val, setValue] = useState(moment());

  const defaultProps = {
    name: 'time',
  };

  return (
    <DateTime
      {...defaultProps}
      onChange={({ target: { value } }) => {
        setValue(value);
        console.log(value.format('MMMM Do YYYY, h:mm:ss a'));
      }}
      value={val}
    />
  );
}

storiesOf('Combined|DateTime', module).add('Simple', () => <DateTimeStory />);
