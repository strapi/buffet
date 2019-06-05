import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Checkbox from '../../src/components/Checkbox';
import Presentation from '../ui/Presentation';

function CheckboxStory() {
  const [val, setValue] = React.useState(false);
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  return (
    <Presentation
      title="Checkbox"
      description="Checkout the Story to see how it works"
    >
      <div style={{ paddingTop: 7 }}>
        <Checkbox
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
    </Presentation>
  );
}

const source = `
import { Checkbox } from 'buffetjs';

function Example() {
  const [val, setValue] = React.useState(false);
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  return (
    <>
      <Checkbox
        {...defaultProps}
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
      />
    </>
  );
}
`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Checkbox', () => <CheckboxStory />);
