import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Padded, Text } from '@buffetjs/core';
import { boolean, select } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
  box: {
    backgroundColor: 'blue',
    display: 'inline-flex',
  },
};

const PaddedStory = () => (
  <Presentation title="Padded" description="A configurable Padded component">
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <div style={styles.box}>
        <Padded
          top={boolean('Top', true)}
          bottom={boolean('Bottom', true)}
          right={boolean('Right', true)}
          left={boolean('Left', true)}
          size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
        >
          <Text size="lg" fontWeight="bold" color="white">
            My text
          </Text>
        </Padded>
      </div>

      <span style={styles.spacerCode} />
      <Pre language="Pre">
        {`
import React from 'react';
import { Padded, Text } from '@buffetjs/core';

function Example() {
  return (
    <Padded
        top
        bottom
        right
        left
        size="sm"
      >
        <Text size='lg' fontWeight="bold">My text</Text>
      </Padded>
  );
}
`}
      </Pre>
    </div>
  </Presentation>
);

storiesOf('Components', module).add('Padded', () => PaddedStory());
