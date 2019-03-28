import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import CheckboxStory from './Checkbox';
import DatePickerStory from './DatePicker';
import EmailStory from './InputEmail';
import EnumerationStory from './Enumeration';
import InputNumberStory from './InputNumber';
import InputPasswordStory from './InputPassword';
import InputSearchStory from './InputSearch';
import InputTextStory from './InputText';
import SelectStory from './Select';
import TextareaStory from './Textarea';
import ToggleStory from './Toggle';

storiesOf('Inputs', module)
  .add('Checkbox', () => <CheckboxStory />)
  .add('DatePicker', () => <DatePickerStory />)
  .add('Email', () => <EmailStory />)
  .add('Enumeration', () => <EnumerationStory />)
  .add('Number', () => <InputNumberStory />)
  .add('Password', () => <InputPasswordStory />)
  .add('Search', () => <InputSearchStory />)
  .add('Text', () => <InputTextStory />)
  .add('Textarea', () => <TextareaStory />)
  .add('Toggle', () => <ToggleStory />)
  .add('Select', () => <SelectStory />);
