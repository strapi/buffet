import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Checkbox from '../../src/components/Checkbox';

const defaultProps = {
  message: 'Check me',
  value: false,
  name: 'checkbox',
};

storiesOf('Components|Checkbox', module).add('Checkbox|WithLabel', () => (
  <Checkbox {...defaultProps} />
));
