import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import List, {
  ContentTypeList,
  ContentManagerList,
} from '../../src/combined/List';

storiesOf('Combined|List', module)
  .add('DefaultList', () => <List />)
  .add('ContentManagerList|DynamicSpacing', () => <ContentManagerList />)
  .add('ContentTypeList|ManualSpacing', () => <ContentTypeList />);
