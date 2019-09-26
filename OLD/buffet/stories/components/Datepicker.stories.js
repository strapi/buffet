import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import DatePicker from '../../src/components/DatePicker';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function DatePickerStory() {
  const [value, setState] = useState(moment());

  return (
    <Presentation
      title="Datepicker"
      description="A DatePicker based on react-datepicker that returns a moment object."
    >
      <div style={{ paddingTop: 7, marginBottom: 23 }}>
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
import { DatePicker } from 'buffetjs';

function Example() {
  const [value, setValue] = useState(moment());

  return (
    <DatePicker
      name="datepicker" // This props is required
      onChange={({ target }) => setValue(target.value)}
      value={value}
    />
  );
}`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('DatePicker', () => <DatePickerStory />);
