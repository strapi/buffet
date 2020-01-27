import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Button } from '@buffetjs/core';
import { useEventListener } from '@buffetjs/hooks';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  const [enableHook, setEnableHook] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  useEventListener(
    'mousemove',
    ({ clientX, clientY }) => {
      setCoords([clientX, clientY]);
    },
    enableHook
  );

  return (
    <Presentation
      title="useEventListener"
      description="Hook to listen to user's events."
    >
      <div style={{ marginBottom: 23 }}>
        <Button type="button" onClick={() => setEnableHook(prev => !prev)}>
          {enableHook ? 'Disable' : 'Enable'} hook
        </Button>
        {enableHook && (
          <p style={{ fontSize: 13, marginTop: 13 }}>
            clientX: {coords[0]}&nbsp;:&nbsp;ClientY: {coords[1]}
          </p>
        )}
      </div>
      <Pre>
        {`
import React, { useState, useEffect } from 'react';
import { Button } from '@buffetjs/core';
import { useEventListener } from '@buffetjs/hooks';

const Example = () => {
  const [enableHook, setEnableHook] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  useEventListener(
    'mousemove',
    ({ clientX, clientY }) => {
      setCoords([clientX, clientY]);
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
          clientX: {coords[0]}&nbsp;:&nbsp;ClientY: {coords[1]}
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

storiesOf('Hooks', module).add('useEventListener', () => <Story />);
