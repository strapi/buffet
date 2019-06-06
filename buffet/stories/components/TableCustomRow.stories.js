import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable  */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';

import Table from '../../src/components/Table';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const CustomRow = ({ row }) => {
  const { firstname, id, lastname, receipe, restaurant } = row;

  return (
    <Row>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{firstname}</p>
      </td>
      <td>
        <p>{lastname}</p>
      </td>
      <td>
        <p>{receipe}</p>
      </td>
      <td>
        <p>{restaurant}</p>
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  row: {},
};

CustomRow.propTypes = {
  row: PropTypes.shape({
    firstname: PropTypes.string,
    id: PropTypes.number,
    lastname: PropTypes.string,
    receipe: PropTypes.string,
    restaurant: PropTypes.string,
  }),
};

const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'Firstname',
    value: 'firstname',
    isSortEnabled: true,
  },
  {
    name: 'Lastname',
    value: 'lastname',
    isSortEnabled: true,
  },
  {
    name: 'Best receipe',
    value: 'receipe',
    isSortEnabled: true,
  },
  {
    name: 'Main restaurant',
    value: 'restaurant',
    isSortEnabled: true,
  },
];
const rows = [
  {
    id: 1,
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    receipe: 'Ratatouille',
    restaurant: 'Le Gaya',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    receipe: 'Beef bourguignon',
    restaurant: 'Le Georges Blanc',
  },
  {
    id: 3,
    firstname: 'Mars',
    lastname: 'Veyrat',
    receipe: 'Lemon Chicken',
    restaurant: 'La Ferme de mon père',
  },
];

function TableStory() {
  return (
    <Presentation title="Table" description="Useful to display data.">
      <div style={{ paddingTop: 3, marginBottom: 35 }}>
        <Table headers={headers} customRow={CustomRow} rows={rows} />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import { Table } from 'buffetjs';

const CustomRow = ({ row }) => {
  const { firstname, id, lastname, receipe, restaurant } = row;

  return (
    <Row>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{firstname}</p>
      </td>
      <td>
        <p>{lastname}</p>
      </td>
      <td>
        <p>{receipe}</p>
      </td>
      <td>
        <p>{restaurant}</p>
      </td>
    </Row>
  );
};

const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'Firstname',
    value: 'firstname',
    isSortEnabled: true,
  },
  {
    name: 'Lastname',
    value: 'lastname',
    isSortEnabled: true,
  },
  {
    name: 'Best receipe',
    value: 'receipe',
    isSortEnabled: true,
  },
  {
    name: 'Main restaurant',
    value: 'restaurant',
    isSortEnabled: true,
  },
];

const rows = [
  {
    id: 1,
    firstname: 'Pierre',
    lastname: 'Gagnaire',
    receipe: 'Ratatouille',
    restaurant: 'Le Gaya',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    receipe: 'Beef bourguignon',
    restaurant: 'Le Georges Blanc',
  },
  {
    id: 3,
    firstname: 'Mars',
    lastname: 'Veyrat',
    receipe: 'Lemon Chicken',
    restaurant: 'La Ferme de mon père',
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
