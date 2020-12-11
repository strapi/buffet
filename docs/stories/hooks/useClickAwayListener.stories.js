import React, { useState, useRef } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { useClickAwayListener } from '@buffetjs/hooks';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  const [clicked, setClicked] = useState(false);
  const wrapperRef = useRef();
  useClickAwayListener(wrapperRef, () => setClicked(true));

  return (
    <Presentation
      title="useClickAwayListener"
      description="Hook handle a click away"
    >
      <div style={{ marginBottom: 23 }}>
        <div
          onClick={() => setClicked(false)}
          ref={wrapperRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid lightgrey',
            borderRadius: 10,
            width: '500px',
            height: '50px',
            backgroundColor: 'white',
          }}
        >
          <p style={{ fontSize: 13 }}>Click outside this element</p>
        </div>
        {clicked && (
          <p style={{ fontSize: 13, marginTop: 13 }}>
            You just click outside the wrapper
          </p>
        )}
        <p style={{ fontSize: 13, marginTop: 13 }}>
          They hook handle a callback on click outside a dom element
        </p>
      </div>
      <Pre>
        {`
import React from 'react';
import { useClickAwayListener } from '@buffetjs/hooks';

const ClickAwayListenerExample = () => {
  useClickAwayListener(wrapperRef, () => console.log('clicked outside'));

  return (
    <div style={{width: '200px', height: '50px'}} ref={wrapperRef} />
  );
}
          `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Hooks', module).add('useClickAwayListener', () => <Story />);
