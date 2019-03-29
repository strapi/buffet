import React, { useState } from 'react';
import Form from '../components/Form';

import InputsIndex from '../../src/components/InputsIndex';

const form = {
  name: {
    className: 'col-6',
    label: 'Text',
    type: 'text',
    validations: {
      required: true,
    },
  },
  date: {
    className: 'col-6',
    label: 'date',
    type: 'date',
    validations: {
      required: true,
    },
  },
};

function InputWithErrorStory() {
  const [value, setValue] = useState({});

  return (
    <Form>
      {Object.keys(form).map(input => (
        <div className={form[input].className} key={input}>
          <InputsIndex
            name={input}
            {...form[input]}
            value={value[input] || ''}
            onChange={({ target }) => {
              setValue({ [target.name]: target.value });
            }}
          />
        </div>
      ))}
    </Form>
  );
}

export default InputWithErrorStory;
