import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import InputNumber from '../../src/components/InputNumber';
import Presentation from '../ui/Presentation';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  return (
    <Presentation
      title="Number"
      description="Checkout the Story to see how it works"
    >
      <InputNumber
        autoFocus
        name="inputNumber"
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        value={val}
      />
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { InputNumber } from 'buffetjs';

function InputNumberStory() {
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
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('InputNumber', () => <InputNumberStory />);
