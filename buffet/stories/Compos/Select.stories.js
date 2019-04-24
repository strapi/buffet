import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Select from '../../src/components/Select';

function SelectStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'select',
    options: ['first option', 'second option'],
  };

  return (
    <Select
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|Select', module).add('Simple', () => <SelectStory />);
