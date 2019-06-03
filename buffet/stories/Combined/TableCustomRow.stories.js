import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Table from '../../src/components/Table';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';

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
    email: 'jim@strapi.io',
    id: 2,
    provider: 'local',
    username: 'jimminy',
  },
];

function TableStory() {
  return (
    <Presentation title="Table">
      <Table headers={headers} customRow={CustomRow} rows={rows} />
    </Presentation>
  );
}

const source = `
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
    email: 'jim@strapi.io',
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

storiesOf('Custom|Table', module)
  .addDecorator(withStorySource(source))
  .add('With Custom row', () => <TableStory />);
