import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { InputNumber } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  return (
    <Presentation
      title="Number"
      description="An input based on rc-input-number."
    >
      <div style={{ marginBottom: 23 }}>
        <InputNumber
          autoFocus
          name="inputNumber"
          onChange={({ target: { value } }) => {
            setValue(value);
          }}
          value={val}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { InputNumber } from '@buffetjs/core';

function Example() {
  const [val, setValue] = useState(null);

  return (
    <InputNumber
      name="input"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={val}
    />
  );
}
`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('InputNumber', () => <InputNumberStory />);
