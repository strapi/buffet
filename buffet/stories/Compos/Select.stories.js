import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Select from '../../src/components/Select';

function SelectStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    name: 'select',
    options: ['First option', 'Second option'],
  };

  return (
    <div className="story">
      <div className="container">
        <h1>Select</h1>
        <Select
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
    </div>
  );
}

const source = `
import React, { useState } from 'react';
import { Select } from 'buffet'; 

function SelectStory() {
  const [val, setValue] = useState(');
  const options = ['first option', 'second option'];

  <Select
    name="select"
    onChange={({ target: { value } }) => {
      setValue(value);
    }}
    options={options}
    value={val}
  />
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Select', () => <SelectStory />);
