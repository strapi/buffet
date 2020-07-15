import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Option } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function OptionStory() {
  const defaultProps = {
    label: 'option',
    onClick: e => console.log(e),
  };
  const label = (
    <>
      <span>Option 1</span>
      <span style={{ fontWeight: 700 }}>&nbsp;is&nbsp;</span>
      <span>Foo</span>
    </>
  );

  return (
    <Presentation title="Option" description="Useful to display filters.">
      <div style={{ marginBottom: 23, display: 'flex' }}>
        <Option {...defaultProps} margin="0 10px 6px 0" />
        <Option {...defaultProps} label={label} margin="0 10px 6px 0" />
        <Option {...defaultProps} height="28px" />
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Option } from '@buffetjs/core';

function Example() {
  const label = (
    <>
      <span>Option 1</span>
      <span style={{ fontWeight: 700 }}>&nbsp;is&nbsp;</span>
      <span>Foo</span>
    </>
  );

  return (
    <div style={{ display: 'flex' }}>
      <Option label="option" margin="0 10px 6px 0" />
      <Option label={label} margin="0 10px 6px 0" />
      <Option
        label="option"
        height="28px"
        onClick={(e) => console.log(e)}
      />
    </div>
  );
}
`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('Option', () => <OptionStory />);
