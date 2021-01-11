import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Toggle } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function ToggleStory() {
  const [val, setValue] = useState(null);

  const defaultProps = {
    name: 'toggle',
  };

  return (
    <Presentation
      title="Toggle"
      description="Similar to the Checkbox it returns only true or false. Can be initialize as null."
    >
      <div style={{ marginBottom: 23 }}>
        <Toggle
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Toggle } from '@buffet/core';

function Example() {
  const [val, setValue] = useState(null);

  return (
    <Toggle
      name="toggle"
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}
        `}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('Toggle', () => <ToggleStory />);
