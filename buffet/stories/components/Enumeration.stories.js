import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Enumeration from '../../src/components/Enumeration';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

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
      description="Input that works like a select."
    >
      <div style={{ marginBottom: 23 }}>
        <Enumeration
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
          options={options}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Enumeration } from 'buffetjs';

function Example() {
  const [val, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ];

  return (
    <Enumeration
      name="enumeration"
      onChange={({ target: { value } }) => setValue(value)}
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

storiesOf('Components', module).add('Enumeration', () => <EnumerationStory />);
