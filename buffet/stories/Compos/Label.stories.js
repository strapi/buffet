import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Label from '../../src/components/Label';

const message = () => "I'm a label as function";

storiesOf('Components|Label', module)
  // Label with message as a string
  .add('MessageAsString', () => (
    <Label htmlFor="input" message="I'm a label as string" />
  ))

  // Label with message as a string
  .add('MessageAsChildren', () => (
    <Label htmlFor="input">I&apos;m a label as child</Label>
  ))

  // Label with message as a func
  .add('MessageAsFunc', () => <Label htmlFor="input" message={message} />);
