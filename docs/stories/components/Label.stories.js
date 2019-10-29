import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  h1: {
    marginBottom: 20,
  },
  h2: { marginTop: 18, marginBottom: 20 },
  spacer: {
    display: 'block',
    marginBottom: 41,
  },
  p: { fontSize: 14 },
  spacerCode: {
    display: 'block',
    marginBottom: 19,
  },
  strong: {
    marginLeft: -16,
    fontSize: 13,
  },
};

function LabelStory() {
  return (
    <>
      <Presentation
        title="Label"
        description="The label can handle different type of messages:"
      />
      <section style={{ marginLeft: 16, marginRight: 16, paddingTop: 7 }}>
        <strong style={styles.strong}>Using string:</strong>
        <span style={styles.spacerCode} />
        <Pre language="javascript">
          {`
<Label htmlFor="input" message="Label" />
`}
        </Pre>
        <span style={{ ...styles.spacer }} />
        <strong style={styles.strong}>Using Children:</strong>
        <span style={styles.spacerCode} />
        <Pre language="Pre">
          {`
import React from 'react';
import { Label, InputText } from '@buffetjs/core';

function Example() {
  return (
    <>
      <Label htmlFor="input">Some Label</Label>
      <InputText name="input" />
    </>
  );
}
`}
        </Pre>
      </section>
    </>
  );
}

storiesOf('Components', module).add('Label', () => LabelStory());
