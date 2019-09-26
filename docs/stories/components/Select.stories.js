import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Select } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function SelectStory() {
  const [val, setValue] = useState('First option');

  const defaultProps = {
    name: 'select',
    options: ['First option', 'Second option'],
  };

  return (
    <Presentation title="Select" description="A simple select.">
      <div style={{ marginBottom: 23 }}>
        <Select
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Select } from '@buffetjs/core';

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
}
`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('Select', () => <SelectStory />);
