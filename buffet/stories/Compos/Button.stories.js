import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';

storiesOf('Components|Button', module).add('Button', () => (
  <Button type="submit">Save</Button>
));
