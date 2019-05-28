import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Checkbox from '../../src/components/Checkbox';

function CheckboxStory() {
  const [val, setValue] = React.useState(false);
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  return (
    <div className="story">
      <div className="container">
        <h1>Input Checkbox</h1>
        <Checkbox
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
    </div>
  );
}

const source = `
import { Checkbox } from 'buffet';
<Checkbox message="Check me" value={false} name="checkbox" />
`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Checkbox', () => <CheckboxStory />);
