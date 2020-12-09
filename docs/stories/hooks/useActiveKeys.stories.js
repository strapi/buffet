import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { useActiveKeys } from '@buffetjs/hooks';
import { Button } from '@buffetjs/core';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  const [enableActiveKeysListener, setEnableActiveKeysListener] = useState(
    false
  );
  const activeKeys = useActiveKeys(enableActiveKeysListener);

  return (
    <Presentation
      title="useActiveKeys"
      description="Hook to save the user's keyboard events."
    >
      <div style={{ marginBottom: 23 }}>
        <Button
          type="button"
          onClick={() => setEnableActiveKeysListener(prev => !prev)}
        >
          {enableActiveKeysListener ? 'Disable' : 'Enable'} hook
        </Button>
        {enableActiveKeysListener && (
          <>
            <p style={{ fontSize: 13, marginTop: 13 }}>
              You clicked on: [&nbsp;
              {activeKeys.map(activeKey => (
                <span key={activeKey}>{activeKey}&nbsp;</span>
              ))}
              ]
            </p>
            <p style={{ fontSize: 13 }}>
              They hook returns the keyboard's keyCodes
            </p>
          </>
        )}
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { useActiveKeys } from '@buffetjs/hooks';
import { Button } from '@buffetjs/core';

const Example = () => {
  const [enableActiveKeysListener, setEnableActiveKeysListerner] = useState(
    false
  );
  const activeKeys = useActiveKeys(enableActiveKeysListener);

  return (
    <>
      <Button
        type="button"
        onClick={() => setEnableActiveKeysListerner(prev => !prev)}
      >
        {enableActiveKeysListener ? 'Disable' : 'Enable'} hook
      </Button>
      {enableActiveKeysListener && (
        <>
          <p style={{ fontSize: 13, marginTop: 13 }}>
            You clicked on: [&nbsp;
            {activeKeys.map(activeKey => (
              <span key={activeKey}>{activeKey}&nbsp;</span>
            ))}
            ]
          </p>
          <p style={{ fontSize: 13 }}>
            They hook returns the keyboard keyCodes
          </p>
        </>
      )}
    </>
  );
}
          `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Hooks', module).add('useActiveKeys', () => <Story />);
