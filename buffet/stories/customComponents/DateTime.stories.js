import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Presentation from '../ui/Presentation';

import DateTime from '../../src/combined/DateTime';
import Pre from '../ui/Pre';

function DateTimeStory() {
  const [state, setValue] = useState(moment());

  return (
    <Presentation
      title="DateTime"
      description="Let the user pick a date and select a time."
    >
      <div style={{ marginBottom: 23 }}>
        <DateTime
          name="datetime"
          onChange={({ target: { value } }) => {
            setValue(value);
          }}
          value={state}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
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

        `}
      </Pre>
    </Presentation>
  );
}

storiesOf('Custom', module).add('DateTime', () => <DateTimeStory />);
