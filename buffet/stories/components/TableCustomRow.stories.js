import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';

import Table from '../../src/components/Table';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const CustomRow = ({ row }) => {
  const { email, id, provider, username } = row;

  return (
    <Row>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{username}</p>
      </td>
      <td>
        <p>{email}</p>
      </td>
      <td>
        <p>{provider}</p>
      </td>
      <td>
        <p>●●●●●●●●</p>
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  row: {},
};

CustomRow.propTypes = {
  row: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    provider: PropTypes.string,
    username: PropTypes.string,
  }),
};

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
    isSortEnabled: false,
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
    email: 'john@strapi.io',
    id: 2,
    provider: 'local',
    username: 'jimminy',
  },
];

function TableStory() {
  return (
    <Presentation
      title="Table"
      description="Checkout the Story to see how it works."
    >
      <div style={{ paddingTop: 3, marginBottom: 21 }}>
        <Table headers={headers} customRow={CustomRow} rows={rows} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import { Table } from 'buffetjs';

const CustomRow = ({ row, onSelect }) => {
  const { email, id, provider, username } = row;

  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{username}</p>
      </td>
      <td>
        <p>{email}</p>
      </td>
      <td>
        <p>{provider}</p>
      </td>
      <td>
        <p>●●●●●●●●</p>
      </td>
    </tr>
  );
};
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
    email: 'john@strapi.io',
    id: 2,
    provider: 'local',
    username: 'jimminy',
  },
];

function Example() {

  return (
    <Table
      customRow={CustomRow}
      headers={headers}
      rows={rows}

    />
  );
}
`;

storiesOf('Components|Table', module).add('With Custom row', () => (
  <TableStory />
));
