import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Checkbox } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function CheckboxStory() {
  const [val, setValue] = useState(false);
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  return (
    <Presentation
      title="Checkbox"
      description="A simple input that returns true or false."
    >
      <div style={{ paddingTop: 7, marginBottom: 23 }}>
        <Checkbox
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Checkbox } from '@buffetjs/core';

function Example() {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      message="Check me"
      name="checkbox"
      onChange={({ target }) => setValue(target.value)}
      value={value}
    />
  );
}`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('Checkbox', () => <CheckboxStory />);
