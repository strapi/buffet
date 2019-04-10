import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputNumber from '../../src/components/InputNumber';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  const defaultProps = {
    name: 'input',
  };

  return (
    <InputNumber
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|InputNumber', module).add('Default', () => (
  <InputNumberStory />
));
