import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Enumeration from '../../src/components/Enumeration';

function EnumerationStory() {
  const [val, setValue] = useState(false);

  const options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ];

  const defaultProps = {
    name: 'enum',
  };

  return (
    <Enumeration
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
      options={options}
    />
  );
}

storiesOf('Components|Enumeration', module).add('Simple', () => (
  <EnumerationStory />
));
