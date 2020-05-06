import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingBar } from '@buffetjs/styles';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function LoadingBarStory() {
  return (
    <Presentation
      title="LoadingBar"
      description="You won't see it anymore when you're done waiting."
    >
      <div style={{ marginBottom: 23 }}>
        <LoadingBar />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { LoadingBar } from '@buffetjs/styles';

function Example() {
  return <LoadingBar />;
}
`;

storiesOf('Components', module).add('LoadingBar', () => <LoadingBarStory />);
