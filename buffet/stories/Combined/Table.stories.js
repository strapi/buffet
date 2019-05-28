import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Table from '../../src/components/Table';
import Checkbox from '../../src/styled/Checkbox';
import IconLinks from '../../src/components/IconLinks';
import Row from '../../src/styled/CustomRow';

const CustomRow = ({ item, onSelect }) => {
  const { email, id, isCheck, links, onClick, provider, username } = item;

  const styles = {
    links: {
      width: 'fit-content',
      float: 'right',
    },
    checkCell: {
      width: '50px',
    },
    idCell: {
      width: '50px',
    },
    nameCell: {
      width: '25%',
    },
    descriptionCell: {
      width: '50%',
    },
    linksCell: {
      width: '15%',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <Checkbox onChange={onSelect} checked={isCheck} />
      </td>
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
      <td>
        <div style={styles.links}>
          <IconLinks links={links} />
        </div>
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  item: {},
  onSelect: () => {},
};

CustomRow.propTypes = {
  item: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    isCheck: PropTypes.bool,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ),
    onClick: PropTypes.func,
    provider: PropTypes.string,
    username: PropTypes.string,
  }),
  onSelect: PropTypes.func,
};

const items = [
  {
    created_at: 1558010491450,
    email: 'soup@strapi.io',
    id: 1,
    links: [
      {
        icon: 'fa fa-pencil',
        onClick: () => {
          alert('Do you want to edit this item'); /* eslint no-alert: "error" */
        },
      },
      {
        icon: 'fa fa-trash',
        onClick: () => {
          alert('Do you want to delete this item');
        },
      },
    ],
    provider: 'local',
    username: 'Soup',
    isCheck: false,
  },
  {
    email: 'jim@strapi.io',
    id: 2,
    links: [
      {
        icon: 'fa fa-pencil',
        onClick: () => {
          alert('Do you want to edit this item');
        },
      },
      {
        icon: 'fa fa-trash',
        onClick: () => {
          alert('Do you want to delete this item');
        },
      },
    ],
    provider: 'local',
    username: 'jimminy',
    isCheck: false,
  },
];

const updater = (array, shouldCheck) =>
  array.map(row => {
    row.isCheck = shouldCheck;

    return row;
  });

const updateAtIndex = (array, index, value) =>
  array.map((row, i) => {
    if (index === i) {
      row.isCheck = value;
    }

    return row;
  });

function reducer(state, action) {
  const { value, index, type, sortBy, nextSort, isSortEnabled } = action;

  switch (type) {
    case 'CHANGE_SORT':
      if (!isSortEnabled) {
        return state;
      }

      if (state.sortBy === sortBy && state.sortOrder === 'asc') {
        return { ...state, sortOrder: 'desc' };
      }

      if (state.sortBy !== sortBy) {
        return { ...state, sortOrder: 'asc', sortBy };
      }

      if (state.sortBy === sortBy && state.sortOrder === 'desc') {
        return { ...state, sortOrder: 'asc', sortBy: nextSort };
      }

      return state;
    case 'SELECT_ROW':
      return { ...state, rows: updateAtIndex(state.rows, index, value) };
    case 'SELECT_ALL':
      return { ...state, rows: updater(state.rows, true) };
    case 'UNSELECT_ALL':
      return { ...state, rows: updater(state.rows, false) };
    default:
      return state;
  }
}

function TableStory() {
  const headers = [
    {
      displayValue: 'id',
      value: 'id',
      isSortEnabled: true,
    },
    {
      displayValue: 'Username',
      value: 'username',
      isSortEnabled: true,
    },
    {
      displayValue: 'Email',
      value: 'email',
      isSortEnabled: true,
    },
    {
      displayValue: 'Provider',
      value: 'provider',
      isSortEnabled: true,
    },
    {
      displayValue: 'Password',
      value: 'password',
      isSortEnabled: false,
    },
    {},
  ];
  const [state, dispatch] = React.useReducer(reducer, {
    sortOrder: 'asc',
    sortBy: 'id',
    rows: items,
  });
  const areAllEntriesSelected = state.rows.every(row => row.isCheck == true);
  const handleSelectAll = () => {
    const type = areAllEntriesSelected ? 'UNSELECT_ALL' : 'SELECT_ALL';

    dispatch({ type });
  };

  const handleSelect = (element, index) => {
    const type = 'SELECT_ROW';

    dispatch({ type, value: !element.isCheck, index });
  };

  const onConfirmSelectAllAction = () => {
    alert('Are you sure?');
  };

  const initProps = {
    headers,
    items: state.rows,
    isCheckEnabled: true,
    onSelect: handleSelect,
    onSelectAll: handleSelectAll,
    actionCollapseInfos: {
      translatedNumberOfEntry: 'entry',
      translatedNumberOfEntries: 'entries',
      translatedActionInfo: 'Delete all',
      actionInfoShape: 'trash',
      onConfirmSelectAllAction,
    },
    sortBy: state.sortBy,
    sortOrder: state.sortOrder,
  };

  return (
    <Table
      {...initProps}
      customRowComponent={props => <CustomRow {...props} />}
      onChangeSort={(sortBy, nextSort, isSortEnabled) => {
        dispatch({ type: 'CHANGE_SORT', sortBy, nextSort, isSortEnabled });
      }}
    />
  );
}

storiesOf('Combined|Table', module).add('DefaultList', () => <TableStory />);
