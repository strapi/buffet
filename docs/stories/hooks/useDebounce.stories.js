import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { useDebounce } from '@buffetjs/hooks';
import { Button, InputText } from '@buffetjs/core';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  const [value, setValue] = useState(null);
  const debouncedValue = useDebounce(value, 1000);

  return (
    <Presentation title="useDebounce" description="Hook to debounce a value.">
      <div style={{ marginBottom: 23 }}>
        <InputText
          style={{ fontSize: 13 }}
          name="input"
          onChange={({ target: { value } }) => {
            setValue(value);
          }}
          type="text"
          placeholder="Value to debounce"
          value={value}
        />
        <p style={{ fontSize: 13, marginTop: 13 }}>{debouncedValue}</p>
        <p style={{ fontSize: 13 }}>They hook returns the debounced value</p>
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { useDebounce } from '@buffetjs/hooks';
import { Button, InputText } from '@buffetjs/core';

const DebounceExample = () => {
  const [value, setValue] = useState(null);
  const debouncedValue = useDebounce(value, 1000)

  return (
    <div>
      <InputText
        style={{ fontSize: 13, marginTop: 13 }}
        name="input"
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        type="text"
        placeholder="Value to debounce"
        value={value}
      />
      <p style={{ fontSize: 13, marginTop: 13 }}>{debouncedValue}</p>
    </div>
  );
}
          `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Hooks', module).add('useDebounce', () => <Story />);
