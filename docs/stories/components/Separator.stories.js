import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Text, Separator, Padded } from '@buffetjs/core';
import { text } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
};

const SeparatorStory = () => (
  <Presentation
    title="Separator"
    description="Display a separator between blocks"
  >
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <div style={{ width: 300 }}>
        <div style={{ backgroundColor: '#007EFF', padding: 10 }}>
          <Text>First block</Text>
        </div>
        <Padded top bottom size="xs">
          <Separator label={text('Separator label', 'or')} />
        </Padded>
        <div style={{ backgroundColor: '#E6F0FB', padding: 10 }}>
          <Text>Second block</Text>
        </div>
      </div>

      <span style={styles.spacerCode} />
      <Pre language="Pre">
        {`
import React from 'react';
import { Text, Padded, Separator } from '@buffetjs/core';

const Example = () => {
  return ( 
      <>
        <div style={{ backgroundColor: '#007EFF', padding: 10 }}>
          <Text>First block</Text>
        </div>
        <Padded top bottom size="xs">
          <Separator label={text('Separator label', 'or')} />
        </Padded>
        <div style={{ backgroundColor: '#E6F0FB', padding: 10 }}>
          <Text>Second block</Text>
        </div>
      </>
  );
}
`}
      </Pre>
    </div>
  </Presentation>
);

storiesOf('Components', module).add('Separator', () => SeparatorStory());
