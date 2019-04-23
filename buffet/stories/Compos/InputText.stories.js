import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputText from '../../src/components/InputText';

function InputTextStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Firstname',
    name: 'input',
    type: 'text',
  };

  return (
    <InputText
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|InputText', module).add('Default', () => (
  <InputTextStory />
));
