import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Textarea from '../../src/components/Textarea';

function TextareaStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Write your little description here…',
    name: 'textarea',
  };

  return (
    <div className="story" style={{ padding: '13px' }}>
      <div className="container">
        <h1>Textarea</h1>
        <Textarea
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
    </div>
  );
}

const source = `
import React, { useState } from 'react';
import { Textarea } from 'buffet';

function TextareaStory() {
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
