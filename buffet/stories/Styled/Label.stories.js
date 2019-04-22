import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Label from '../../src/styled/Label';

storiesOf('Styled|Label', module).add('Simple', () => (
  <Label htmlFor="input">I&apos;m a label</Label>
));
