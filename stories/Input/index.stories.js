import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import InputNumberStory from './InputNumber';
import SelectStory from './Select';
import DatePickerStory from './DatePicker';

storiesOf('Single|Inputs', module)
  .add('DatePicker', () => <DatePickerStory />)
  .add('Number', () => <InputNumberStory />)
  .add('Select', () => <SelectStory />);
