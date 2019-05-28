import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import moment from 'moment';

import DateTime from '../../src/combined/DateTime';

function DateTimeStory() {
  const [state, setValue] = useState(moment());

  return (
    <DateTime
      name="datetime"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={state}
    />
  );
}

const source = `
import React from 'react';
import moment from 'moment';
import { DateTime } from 'buffetjs';

function Example() {
  const [state, setValue] = useState(moment());

  return (
    <DateTime
      name="datetime"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={state}
    />
  );
}

export default Example;
`;

storiesOf('Combined', module)
  .addDecorator(withStorySource(source))
  .add('DateTime', () => <DateTimeStory />);
