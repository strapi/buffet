import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Textarea from '../../src/components/Textarea';
import Presentation from '../ui/Presentation';

function TextareaStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Write your little description here…',
    name: 'textarea',
  };

  return (
    <Presentation
      title="Textarea"
      description="Checkout the Story to see how it works."
    >
      <Textarea
        {...defaultProps}
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
      />
    </Presentation>
  );
}

const source = `
import React, { useState } from 'react';
import { Textarea } from 'buffet';

function Example() {
  const [val, setValue] = useState('');

  return (
    <Textarea
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Textarea', () => <TextareaStory />);
