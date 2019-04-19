import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import DefaultList, { ContentManagerList, ContentTypeList } from './List';

storiesOf('Combined|List', module)
  .addDecorator(withKnobs)
  .add('DefaultList', () => <DefaultList />)
  .add('ContentManagerList', () => <ContentManagerList />)
  .add('ContentTypeList', () => <ContentTypeList />);
