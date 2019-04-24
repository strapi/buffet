import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Checkbox from '../../src/styled/Checkbox';

storiesOf('Styled|Checkbox', module).add('Simple', () => (
  <Checkbox name="inputCheckbox" message="Checkbox" />
));
