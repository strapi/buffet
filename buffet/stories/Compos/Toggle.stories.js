import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Toggle from '../../src/components/Toggle';

function ToggleStory() {
  const [val, setValue] = useState(false);

  const defaultProps = {
    name: 'toggle',
  };

  return (
    <div className="story">
      <div className="container">
        <h1>Toggle</h1>
        <Toggle
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
import { Toggle } from 'buffet'; 

function ToggleStory() {
  const [val, setValue] = useState(false);

  return (
    <Toggle
      name="toggle"
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Toggle', () => <ToggleStory />);
