import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Enumeration from '../../src/components/Enumeration';

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
    <div className="story">
      <div className="container">
        <h1>Enumeration</h1>
        <Enumeration
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
          options={options}
        />
      </div>
    </div>
  );
}

const source = `
import React, { useState } from 'react';
import { Enumeration } from 'buffet'; 

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
