import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Table from '../../src/components/Table';

function EmptyTableStory() {
  return <Table />;
}

function TableStory() {
  const defaultProps = {
    checkEnabled: true,
    items: [
      {
        created_at: 1558010491450,
        email: 'soup@strapi.io',
        id: 1,
        provider: 'local',
        resetPasswordToken: null,
        role: 2,
        updated_at: 1558010491457,
        username: 'Soup',
      },
      {
        created_at: 1558010565409,
        email: 'jim@strapi.io',
        id: 2,
        provider: 'local',
        resetPasswordToken: null,
        role: 1,
        updated_at: 1558010565413,
        username: 'jimminy',
      },
    ],
  };

  return <Table {...defaultProps} />;
}

storiesOf('Components|Table', module)
  .add('Default', () => <TableStory />)
  .add('Empty', () => <EmptyTableStory />);
