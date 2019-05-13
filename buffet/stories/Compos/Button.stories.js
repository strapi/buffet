import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';

storiesOf('Components|Button', module)
  .add('Child', () => <Button type="submit">Save</Button>)
  .add('Label', () => <Button type="submit" label="Save" />);
