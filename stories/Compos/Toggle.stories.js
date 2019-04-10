import React, { useState } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Toggle from '../../src/components/Toggle';

function ToggleStory() {
  const [val, setValue] = useState(false);

  const defaultProps = {
    name: 'toggle',
  };

  return (
    <Toggle
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|Toggle', module).add('Simple', () => <ToggleStory />);
