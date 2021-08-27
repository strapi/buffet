import React, { useState, useEffect } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';

import { Toggle } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function ToggleCombo(props) {
  const [val, setValue] = useState(props.initValue);

  useEffect(() => {
    setValue(props.initValue);
  }, [props.initValue]);

  return (
    <Toggle
      {...props}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

function ToggleStory() {
  const InitValues = {
    null: 'null',
    false: 'false',
    true: 'true',
  };

  const initValue = radios('Initial value', InitValues, 'null');

  const defaultProps = {
    name: 'toggle',
  };

  return (
    <Presentation
      title="Toggle"
      description="Similar to the Checkbox it returns only true or false. Can be initialized as null."
    >
      <div style={{ marginBottom: 23 }}>
        <ToggleCombo
          {...defaultProps}
          initValue={initValue === 'null' ? null : initValue === 'true'}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Toggle } from '@buffetjs/core';

function Example() {
  const [val, setValue] = useState(${initValue});

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

storiesOf('Components', module).add('Toggle', () => ToggleStory());
