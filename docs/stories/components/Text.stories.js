import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Text } from '@buffetjs/core';
import { text, boolean, select } from '@storybook/addon-knobs';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
};

// TODO : In the futur, we'll need to use the theme.
const colorsOptions = ['black', 'lightBlue', 'mediumBlue', 'darkBlue'];
const textTransformOptions = ['none', 'uppercase', 'lowercase', 'capitalize'];
const fontSizesOptions = ['xs', 'sm', 'md', 'lg'];
const fontWeightsOptions = ['regular', 'semiBold', 'bold', 'black'];

const TextStory = () => (
  <Presentation title="Text" description="A configurable Text component">
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <Text
        fontSize={select('font-size', fontSizesOptions, 'md')}
        fontWeight={select('font-weight', fontWeightsOptions, 'regular')}
        color={select('color', colorsOptions, 'black')}
        textTransform={select('text-transform', textTransformOptions, 'none')}
        //
      >
        {text('Text', 'my custom text')}
      </Text>

      <span style={styles.spacerCode} />
      <Pre language="Pre">
        {`
import React from 'react';
import { Text } from '@buffetjs/core';

function Example() {
  return (
    <Text 
        textTransform="capitalize" 
        color="orange"
        lineHeight={6}
        fontWeight="bold"
        fontSize="sm"
        ellipsis
    >
        This is a custom text
    </Text>
  );
}
`}
      </Pre>
    </div>
  </Presentation>
);

storiesOf('Components', module).add('Text', () => TextStory());
