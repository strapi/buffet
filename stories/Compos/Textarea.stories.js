import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Textarea from '../../src/components/Textarea';

const defaultProps = {
  placeholder: 'Write your little description here…',
  name: 'textarea',
  rows: '4',
  value: '',
};

storiesOf('Components|Textarea', module).add('MessageAsString', () => (
  <Textarea {...defaultProps} />
));
