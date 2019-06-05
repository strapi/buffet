import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import moment from 'moment';

import Presentation from '../ui/Presentation';

import DateTime from '../../src/combined/DateTime';

function DateTimeStory() {
  const [state, setValue] = useState(moment());

  return (
    <Presentation
      title="DateTime"
      description="Checkout the Story to see how it works."
    >
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

storiesOf('Custom', module)
  .addDecorator(withStorySource(source))
  .add('DateTime', () => <DateTimeStory />);
