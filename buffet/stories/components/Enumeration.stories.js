import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Enumeration from '../../src/components/Enumeration';
import Presentation from '../ui/Presentation';

function EnumerationStory() {
  const [val, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ];

  const defaultProps = {
    name: 'enum',
  };

  return (
    <Presentation
      title="Enumeration"
      description="Checkout the Story to see how it works"
    >
      <Enumeration
        {...defaultProps}
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
        options={options}
      />
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { Enumeration } from 'buffetjs';

function EnumerationStory() {
  const [val, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ];

  return (
    <Enumeration
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
      name="enumeration"
      options={options}
    />
  );
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Enumeration', () => <EnumerationStory />);
