import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import DateTime from '../../src/combined/DateTime';

function DateTimeStory() {
  const [val, setValue] = useState(moment());

  const defaultProps = {
    name: 'time',
  };

  return (
    <DateTime
      {...defaultProps}
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={val}
    />
  );
}

storiesOf('Combined', module).add('DateTime', () => <DateTimeStory />);
