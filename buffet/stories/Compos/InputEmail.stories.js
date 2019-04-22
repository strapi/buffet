import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputText from '../../src/components/InputText';

function InputTextStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Write your little description here…',
    name: 'input',
    type: 'email',
  };

  return (
    <InputText
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|InputEmail', module).add('Default', () => (
  <InputTextStory />
));
