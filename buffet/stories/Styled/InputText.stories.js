import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputText from '../../src/styled/InputText';

storiesOf('Styled|InputText', module).add('Simple', () => (
  <InputText type="text" placeholder="Text" />
));
