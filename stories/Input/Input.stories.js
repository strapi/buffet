import React from 'react';

import { storiesOf } from '@storybook/react';
import InputText from '../../src/components/InputText';
import InputBase from '../../src/components/InputBase';
import Textarea from '../../src/components/Textarea';

storiesOf('Input|Input', module)
  // Simple Text input
  .add('Input|InputText', () => <InputText type="text" placeholder="Text" />)
  // Text input
  .add('Input|InputTextWithWrapper', () => (
    <InputBase type="text" placeholder="Text" />
  ))

  // Search input
  .add('Input|InputSearchWrapper', () => (
    <InputBase type="search" placeholder="Tap something to search" />
  ))

  // Email input
  .add('Input|InputEmailWrapper', () => (
    <InputBase type="email" placeholder="john.doe@strapi.io" />
  ))

  // Password input
  .add('Input|InputPasswordWrapper', () => (
    <InputBase
      type="password"
      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
    />
  ))

  // Textarea input
  .add('Input|InputTextareaWrapper', () => (
    <Textarea rows="4" placeholder="Write your little description here…" />
  ));
