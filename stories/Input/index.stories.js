import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import CheckboxStory from './Checkbox';
import EmailStory from './InputEmail';
import InputNumberStory from './InputNumber';
import InputPasswordStory from './InputPassword';
import InputSearchStory from './InputSearch';
import InputTextStory from './InputText';
import SelectStory from './Select';
import TextareaStory from './Textarea';
import DatePickerStory from './DatePicker';

storiesOf('Single|Inputs', module)
  .add('Checkbox', () => <CheckboxStory />)
  .add('DatePicker', () => <DatePickerStory />)
  .add('Email', () => <EmailStory />)
  .add('Number', () => <InputNumberStory />)
  .add('Password', () => <InputPasswordStory />)
  .add('Search', () => <InputSearchStory />)
  .add('Text', () => <InputTextStory />)
  .add('Textarea', () => <TextareaStory />)
  .add('Select', () => <SelectStory />);
