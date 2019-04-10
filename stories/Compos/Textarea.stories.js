import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Textarea from '../../src/components/Textarea';

function TextareaStory() {
  const [val, setValue] = useState('');

  const defaultProps = {
    placeholder: 'Write your little description here…',
    name: 'textarea',
    rows: '4',
  };

  return (
    <Textarea
      {...defaultProps}
      onChange={({ target: { value } }) => setValue(value)}
      value={val}
    />
  );
}

storiesOf('Components|Textarea', module).add('Simple', () => <TextareaStory />);
