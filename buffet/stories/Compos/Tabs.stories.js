import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Tabs from '../../src/components/Tabs';
import ListTitle from '../../src/styled/ListTitle';

function TabsStory() {
  return (
    <Tabs>
      <div title="Tab 1">
        <ListTitle>Tab Panel 1</ListTitle>
      </div>
      <div title="Tab 2">
        <ListTitle>Tab Panel 2</ListTitle>
      </div>
    </Tabs>
  );
}

storiesOf('Components|Tabs', module).add('Default', () => <TabsStory />);
