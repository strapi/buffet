import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Checkbox from '../../src/components/Checkbox';

function CheckboxStory() {
  const [val, setValue] = useState(false);

  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  return (
    <Checkbox
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|Checkbox', module).add('CheckboxWithLabel', () => (
  <CheckboxStory />
));
