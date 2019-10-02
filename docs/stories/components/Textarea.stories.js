import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Textarea } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function TextareaStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Write your little description here…',
    name: 'textarea',
  };

  return (
    <Presentation title="Textarea" description="Enter and edit text.">
      <div style={{ marginBottom: 23 }}>
        <Textarea
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Textarea } from '@buffetjs/core';

function Example() {
  const [val, setValue] = useState('');

  return (
    <Textarea
      name="textarea"
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

storiesOf('Components', module).add('Textarea', () => <TextareaStory />);
