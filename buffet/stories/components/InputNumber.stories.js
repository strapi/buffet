import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import InputNumber from '../../src/components/InputNumber';
import Presentation from '../ui/Presentation';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  return (
    <Presentation title="Number">
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
import { InputNumber } from 'buffet';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  <InputNumber
    name="input"
    onChange={({ target: { value } }) => {
      setValue(value);
    }}
    value={val}
  />
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('InputNumber', () => <InputNumberStory />);
