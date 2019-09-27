import React from 'react';
/* eslint-disable */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';
import { Table } from '@buffetjs/core';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const headers = [
  {
    name: 'Id',
    value: 'id',
  },
  {
    name: 'First name',
    value: 'firstname',
  },
  {
    name: 'Last name',
    value: 'lastname',
  },
  {
    name: 'Best recipe',
    value: 'recipe',
  },
];
const rows = [
  {
    id: 1,
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    recipe: 'Ratatouille',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    recipe: 'Beef bourguignon',
  },
  {
    id: 3,
    firstname: 'Marc',
    lastname: 'Veyrat',
    recipe: 'Lemon Chicken',
  },
];

function TableStory() {
  return (
    <Presentation title="Table" description="Useful to display tabular data.">
      <div style={{ paddingTop: 3, marginBottom: 35 }}>
        <Table headers={headers} rows={rows} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { Table } from '@buffetjs/core';

const headers = [
  {
    name: 'Id',
    value: 'id',
  },
  {
    name: 'First name',
    value: 'firstname',
  },
  {
    name: 'Last name',
    value: 'lastname',
  },
  {
    name: 'Best recipe',
    value: 'recipe',
  },
];

const rows = [
  {
    id: 1,
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    recipe: 'Ratatouille',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    recipe: 'Beef bourguignon',
  },
  {
    id: 3,
    firstname: 'Marc',
    lastname: 'Veyrat',
    recipe: 'Lemon Chicken',
  },
];

function Example() {
  return (
    <Table headers={headers} rows={rows} />
  );
}
`;

storiesOf('Components|Table', module).add('Simple', () => <TableStory />);
