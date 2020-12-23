import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Text } from '@buffetjs/core';
import { Tooltip } from '@buffetjs/styles';
import { text, select, number } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
};

const placeOptions = ['bottom', 'top', 'right', 'left'];

const TooltipStory = () => (
  <Presentation title="Tooltip" description="A configurable Tooltip component">
    <div
      style={{
        paddingTop: 17,
        marginBottom: 22,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: 300,
        }}
      >
        <div
          data-for="block"
          data-tip={text('Tooltip content', 'The tooltip content')}
          style={{ backgroundColor: '#007EFF', padding: 10 }}
        >
          <Text>Block</Text>
        </div>
        <Tooltip
          delayShow={number('delayShow', 500)}
          place={select('place', placeOptions, 'bottom')}
          id="block"
        />
      </div>

      <span style={styles.spacerCode} />
      <Pre language="Pre">
        {`
import React from 'react';
import { Text } from '@buffetjs/core';
import { Tooltip } from '@buffetjs/styles';

const Example = () => {
  return ( 
      <>
        <div
          data-for="block"
          data-tip={text('Tooltip content', 'The tooltip content')}
          style={{ backgroundColor: '#007EFF', padding: 10 }}
        >
          <Text>Block</Text>
        </div>
        <Tooltip id="block" />
      </>
  );
}
`}
      </Pre>
    </div>
  </Presentation>
);

storiesOf('Components', module).add('Tooltip', () => TooltipStory());
