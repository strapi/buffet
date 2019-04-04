import React, { useState } from 'react';

import Toggle from '../../src/components/Toggle';
import Form from '../components/Form';

function ToggleStory() {
  const [val, setValue] = useState(false);

  return (
    <Form>
      <Toggle
        name="inputToggle"
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
        message="Toggle"
      />
    </Form>
  );
}

export default ToggleStory;
