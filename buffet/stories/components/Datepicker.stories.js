import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import moment from 'moment';
import DatePicker from '../../src/components/DatePicker';
import Presentation from '../ui/Presentation';

function DatePickerStory() {
  const [value, setState] = React.useState(moment());

  return (
    <Presentation
      title="Datepicker"
      description="Checkout the Story to see how it works"
    >
      <DatePicker
        name="date"
        value={value}
        onChange={({ target }) => setState(target.value)}
      />
    </Presentation>
  );
}

const source = `
import { DatePicker } from 'buffetjs';

function Example() {
  const [value, setState] = React.useState(moment());

  return (
    <DatePicker
      name="date"
      value={value}
      onChange={({ target }) => setState(target.value)}
    />
  );
}
`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('DatePicker', () => <DatePickerStory />);
