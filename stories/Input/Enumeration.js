import React, { useState } from 'react';

import Enumeration from '../../src/components/Enumeration';
import Form from '../components/Form';

function EnumerationStory() {
  const [val, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ];

  return (
    <Form>
      <Enumeration
        name="inputEnum"
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
        options={options}
      />
    </Form>
  );
}

export default EnumerationStory;
