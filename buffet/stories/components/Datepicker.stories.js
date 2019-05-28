import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import DatePicker from '../../src/components/DatePicker';
import Presentation from '../ui/Presentation';

function DatePickerStory() {
  return (
    <Presentation title="Datepicker">
      <DatePicker name="date" />
    </Presentation>
  );
}

const source = `
import { DatePicker } from 'buffet';

<DatePicker name="date" />`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('DatePicker', () => <DatePickerStory />);
