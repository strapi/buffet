import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Flex, Text, Padded } from '@buffetjs/core';
import { select } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 10,
    width: 100,
  },
  container: {
    backgroundColor: 'blue',
    height: 100,
    width: 500,
    padding: 10,
  },
};

const FlexStory = () => (
  <Presentation title="Flex" description="A configurable Flex component">
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <div style={styles.container}>
        <Flex
          style={{ height: '100%' }}
          alignItems={select(
            'align-items',
            ['flex-start', 'center', 'stretch'],
            'flex-start'
          )}
          justifyContent={select(
            'justify-content',
            [
              'flex-start',
              'center',
              'flex-end',
              'space-between',
              'space-around',
            ],
            'flex-start'
          )}
        >
          <div style={styles.box}>
            <Text size="lg" fontWeight="bold" color="white">
              box 1
            </Text>
          </div>
          <Padded left />
          <div style={styles.box}>
            <Text size="lg" fontWeight="bold" color="white">
              box 2
            </Text>
          </div>
          <Padded left />
          <div style={styles.box}>
            <Text size="lg" fontWeight="bold" color="white">
              box 3
            </Text>
          </div>
        </Flex>
      </div>
    </div>

    <Pre language="Pre">
      {`
import React from 'react';
import { Flex, Text } from '@buffetjs/core';

function Example() {
  return (
    <Flex justifyContent='jusify-content' alignItems="normal">
        <div style={styles.box}>
        <Text size="lg" fontWeight="bold" color="white">
            box 1
        </Text>
        </div>
        <Padded left />
        <div style={styles.box}>
        <Text size="lg" fontWeight="bold" color="white">
            box 2
        </Text>
        </div>
        <Padded left />
        <div style={styles.box}>
        <Text size="lg" fontWeight="bold" color="white">
            box 3
        </Text>
        </div>
    </Flex>
  );
}
`}
    </Pre>
  </Presentation>
);

storiesOf('Components', module).add('Flex', () => FlexStory());
