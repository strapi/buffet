import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import InputNumber from '../../src/components/InputNumber';

function InputNumberStory() {
  const [val, setValue] = useState(null);

  return (
    <div className="story">
      <div className="container">
        <h1>Input Number</h1>
        <InputNumber
          autoFocus
          name="inputNumber"
          onChange={({ target: { value } }) => {
            setValue(value);
          }}
          value={val}
        />
      </div>
    </div>
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
