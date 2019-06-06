import React from 'react';
/* eslint-disable */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';
import Table from '../../src/components/Table';

import Presentation from '../ui/Presentation';

const headers = [
  {
    name: 'Id',
    value: 'id',
  },
  {
    name: 'Username',
    value: 'username',
  },
  {
    name: 'Email',
    value: 'email',
  },
  {
    name: 'Provider',
    value: 'provider',
  },
  {
    name: 'Password',
    value: 'password',
  },
];
const rows = [
  {
    created_at: 1558010491450,
    email: 'soup@strapi.io',
    id: 1,
    provider: 'local',
    username: 'Soup',
  },
  {
    email: 'jim@strapi.io',
    id: 2,
    provider: 'local',
    username: 'jimminy',
  },
];

function TableStory() {
  return (
    <Presentation title="Table" description="Useful to display data.">
      <Table headers={headers} rows={rows} />
    </Presentation>
  );
}

const source = `
import { Table } from 'buffetjs';

const headers = [
  {
    name: 'Id',
    value: 'id',
  },
  {
    name: 'Username',
    value: 'username',
  },
  {
    name: 'Email',
    value: 'email',
  },
  {
    name: 'Provider',
    value: 'provider',
  },
  {
    name: 'Password',
    value: 'password',
  },
];
const rows = [
  {
    created_at: 1558010491450,
    email: 'soup@strapi.io',
    id: 1,
    provider: 'local',
    username: 'Soup',
  },
  {
    email: 'jim@strapi.io',
    id: 2,
    provider: 'local',
    username: 'jimminy',
  },
];

function Example() {
  return (
    <Table headers={headers} rows={rows} />
  );
}
`;

storiesOf('Components|Table', module).add('Simple', () => <TableStory />);
