import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Button } from '@buffetjs/core';
import { useShortcutEffect } from '@buffetjs/hooks';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  const [enableHook, setEnableHook] = useState(false);

  useShortcutEffect(
    'tab',
    () => {
      console.log('You pressed a key');
    },
    enableHook
  );

  return (
    <Presentation
      title="useShortcutEffect"
      description="Hook to quickly add shortcut effect."
    >
      <div style={{ marginBottom: 23 }}>
        <Button type="button" onClick={() => setEnableHook(prev => !prev)}>
          {enableHook ? 'Disable' : 'Enable'} hook
        </Button>
        {enableHook && (
          <p style={{ fontSize: 13, marginTop: 13 }}>
            Press tab to trigger the event
          </p>
        )}
        <p style={{ fontSize: 13, marginTop: 17 }}>
          The supported keys are alt, arrowUp, arrowDown, f, enter and tab.
        </p>
      </div>
      <Pre>
        {`
import React, { useState, useEffect } from 'react';
import { Button } from '@buffetjs/core';
import { useShortcutEffect } from '@buffetjs/hooks';

const Example = () => {
  const [enableHook, setEnableHook] = useState(false);
  
  useShortcutEffect(
    'tab',
    () => {
      alert('You pressed a key');
    },
    enableHook
  );

  return (
    <>
      <Button
        type="button"
        onClick={() => setEnableHook(prev => !prev)}
      >
        {enableHook ? 'Disable' : 'Enable'} hook
      </Button>
      {enableHook && (
        <p style={{ fontSize: 13, marginTop: 13 }}>
          Press tab to trigger the event
        </p>
      )}
    </>
  );
};

export default Example;
          `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Hooks', module).add('useShortcutEffect', () => <Story />);
