import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Label from '../../src/components/Label';

const message = () => "I'm a function";

storiesOf('Label|Label', module)
  // Label with message as a string
  .add('Label|MessageAsString', () => (
    <Label htmlFor="input" message="I'm a string" />
  ))

  // Label with message as a string
  .add('Label|MessageAsChildren', () => (
    <Label htmlFor="input">I&apos;m a label child</Label>
  ))

  // Label with message as a func
  .add('Label|MessageAsFunc', () => (
    <Label htmlFor="input" message={message} />
  ));
