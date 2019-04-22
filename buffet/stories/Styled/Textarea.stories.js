import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Textarea from '../../src/styled/Textarea';

storiesOf('Styled|Textarea', module).add('Simple', () => (
  <Textarea placeholder="Write a short description!" />
));
