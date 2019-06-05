import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Select from '../../src/components/Select';
import Presentation from '../ui/Presentation';

function SelectStory() {
  const [val, setValue] = useState('Second option');

  const defaultProps = {
    name: 'select',
    options: ['First option', 'Second option'],
  };

  return (
    <Presentation
      title="Select"
      description="Checkout the Story to see how it works."
    >
      <Select
        {...defaultProps}
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
      />
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { Select } from 'buffetjs';

function Example() {
  const [val, setValue] = useState('first option');
  const options = ['first option', 'second option'];

  return (
    <Select
      name="select"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      options={options}
      value={val}
    />
  );
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Select', () => <SelectStory />);
