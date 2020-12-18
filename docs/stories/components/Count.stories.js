import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Count } from '@buffetjs/core';
import { boolean, number } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const CountStory = () => (
  <Presentation title="Count" description="Useful to display a counter">
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <Count count={number('Count', 2)} isActive={boolean('isActive', true)} />
    </div>

    <Pre language="Pre">
      {`
import React, { useState } from 'react';
import { Count } from '@buffetjs/core';

function Example() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Count count={2} isActive={isActive} />
  );
}
`}
    </Pre>
  </Presentation>
);

storiesOf('Components', module).add('Count', () => CountStory());
