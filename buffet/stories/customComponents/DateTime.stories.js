import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import moment from 'moment';

import Presentation from '../ui/Presentation';

import DateTime from '../../src/combined/DateTime';
import Label from '../../src/components/Label';

function DateTimeStory() {
  const [state, setValue] = useState(moment());

  return (
    <Presentation title="DateTime">
      <Label htmlFor="datetime">Enter a date</Label>
      <DateTime
        name="datetime"
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        value={state}
      />
    </Presentation>
  );
}

const source = `
import React from 'react';
import moment from 'moment';
import { DateTime, Label } from 'buffet';

function Example() {
  const [state, setValue] = useState(moment());

  return (
    <Label htmlFor="datetime">Enter a date</Label>
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

storiesOf('Custom', module)
  .addDecorator(withStorySource(source))
  .add('DateTime', () => <DateTimeStory />);
