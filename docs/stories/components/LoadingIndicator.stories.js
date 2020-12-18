import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingIndicator } from '@buffetjs/styles';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function LoadingIndicatorStory() {
  return (
    <Presentation
      title="LoadingIndicator"
      description="You won't see it anymore when you're done waiting."
    >
      <div style={{ marginBottom: 23 }}>
        <LoadingIndicator
          animationTime="0.6s"
          borderWidth="4px"
          borderColor="#f3f3f3"
          borderTopColor="#555555"
          size="26px"
        />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { LoadingIndicator } from '@buffetjs/styles';

function Example() {
  return (
    <LoadingIndicator
      animationTime="0.6s"
      borderWidth="4px"
      borderColor="#f3f3f3"
      borderTopColor="#555555"
      size="26px"
    />
  );
}
`;

storiesOf('Components', module).add('LoadingIndicator', () => (
  <LoadingIndicatorStory />
));
