import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputText from '../../src/components/InputText';

function InputTextStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Tap something to search…',
    name: 'input',
    type: 'search',
  };

  return (
    <InputText
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|InputSearch', module).add('Default', () => (
  <InputTextStory />
));
