import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Table from '../../src/components/Table';
import Presentation from '../ui/Presentation';

function TableStory() {
  const defaultProps = {
    checkEnabled: true,
    headers: [],
    items: [
      {
        id: 1,
        username: 'Soup',
        email: 'soup@strapi.io',
        provider: 'local',
        role: 2,
      },
      {
        id: 2,
        username: 'jimminy',
        email: 'jim@strapi.io',
        provider: 'local',
        role: 1,
      },
    ],
  };

  return (
    <Presentation title="Table">
      {' '}
      <Table {...defaultProps} />
    </Presentation>
  );
}

storiesOf('Components|Table', module)
  .add('Default', () => <TableStory />)
  .add('Empty', () => <Table />);
