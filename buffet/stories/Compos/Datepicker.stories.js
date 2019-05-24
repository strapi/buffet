import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import DatePicker from '../../src/components/DatePicker';

function DatePickerStory() {
  return (
    <div className="story">
      <div className="container">
        <h1>DatePicker</h1>
        <DatePicker name="date" />
      </div>
    </div>
  );
}

const source = `
import { DatePicker } from 'buffet'; 

<DatePicker name="date" />`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('DatePicker', () => <DatePickerStory />);
