import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { DatePicker } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function DatePickerStory() {
  const [value, setState] = useState(moment([2020, 0, 11]));

  return (
    <Presentation
      title="Datepicker"
      description="A DatePicker based on react-datepicker that returns a moment object."
    >
      <div style={{ paddingTop: 17, marginBottom: 22 }}>
        <DatePicker
          name="date"
          value={value}
          onChange={({ target }) => setState(target.value)}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from '@buffetjs/core';

function Example() {
  const [value, setState] = useState(moment([2020, 0, 11]));

  return (
    <DatePicker
      name="datepicker" // This props is required
      onChange={({ target }) => setState(target.value)}
      value={value}
    />
  );
}`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('DatePicker', () => <DatePickerStory />);
