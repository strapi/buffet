import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Table from '../../src/components/Table';
import Presentation from '../ui/Presentation';

const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'Username',
    value: 'username',
    isSortEnabled: true,
  },
  {
    name: 'Email',
    value: 'email',
    isSortEnabled: true,
  },
  {
    name: 'Provider',
    value: 'provider',
    isSortEnabled: true,
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

const updateAtIndex = (array, index, value) =>
  array.map((row, i) => {
    if (index === i) {
      row._isChecked = value;
    }

    return row;
  });

const updateRows = (array, shouldSelect) =>
  array.map(row => {
    row._isChecked = shouldSelect;

    return row;
  });

function reducer(state, action) {
  const { nextElement, sortBy, type } = action;

  switch (type) {
    case 'CHANGE_SORT':
      if (state.sortBy === sortBy && state.sortOrder === 'asc') {
        return { ...state, sortOrder: 'desc' };
      }

      if (state.sortBy !== sortBy) {
        return { ...state, sortOrder: 'asc', sortBy };
      }

      if (state.sortBy === sortBy && state.sortOrder === 'desc') {
        return { ...state, sortOrder: 'asc', sortBy: nextElement };
      }

      return state;
    case 'SELECT_ALL':
      return { ...state, rows: updateRows(state.rows, true) };
    case 'SELECT_ROW':
      return {
        ...state,
        rows: updateAtIndex(state.rows, action.index, !action.row._isChecked),
      };
    case 'UNSELECT_ALL':
      return { ...state, rows: updateRows(state.rows, false) };
    default:
      return state;
  }
}

function init(initialState) {
  const updatedRows = initialState.rows.map(row => {
    row._isChecked = false;

    return row;
  });

  return { ...initialState, rows: updatedRows };
}

function TableStory() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {
      headers,
      rows,
      sortBy: 'id',
      sortOrder: 'asc',
    },
    init,
  );
  const areAllEntriesSelected = state.rows.every(
    row => row._isChecked === true,
  );
  const bulkActionProps = {
    icon: 'trash',
    onConfirm: () => {
      alert('Are you sure you want to delete these entries?');
    },
    translatedNumberOfEntry: 'entry',
    translatedNumberOfEntries: 'entries',
    translatedAction: 'Delete all',
  };

  return (
    <Presentation title="Table">
      <Table
        headers={state.headers}
        bulkActionProps={bulkActionProps}
        onChangeSort={({
          sortBy,
          firstElementThatCanBeSorted,
          isSortEnabled,
        }) => {
          if (isSortEnabled) {
            dispatch({
              type: 'CHANGE_SORT',
              sortBy,
              nextElement: firstElementThatCanBeSorted,
            });
          }
        }}
        onClickRow={(e, data) => {
          alert(`You have just clicked on ${data.username} row`);
        }}
        onSelect={(row, index) => {
          dispatch({ type: 'SELECT_ROW', row, index });
        }}
        onSelectAll={() => {
          const type = areAllEntriesSelected ? 'UNSELECT_ALL' : 'SELECT_ALL';

          dispatch({ type });
        }}
        rows={state.rows}
        sortBy={state.sortBy}
        sortOrder={state.sortOrder}
        withBulkAction
        rowLinks={[
          {
            icon: 'fa fa-pencil',
            onClick: data => {
              alert(`Do you want to edit ${data.username}?`);
            },
          },
          {
            icon: 'fa fa-trash',
            onClick: data => {
              alert(`Do you want to delete ${data.username}?`);
            },
          },
        ]}
      />
    </Presentation>
  );
}

const source = `
const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'Username',
    value: 'username',
    isSortEnabled: true,
  },
  {
    name: 'Email',
    value: 'email',
    isSortEnabled: true,
  },
  {
    name: 'Provider',
    value: 'provider',
    isSortEnabled: true,
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

const updateAtIndex = (array, index, value) =>
  array.map((row, i) => {
    if (index === i) {
      row._isChecked = value;
    }

    return row;
  });

const updateRows = (array, shouldSelect) =>
  array.map(row => {
    row._isChecked = shouldSelect;

    return row;
  });

function reducer(state, action) {
  const { nextElement, sortBy, type } = action;

  switch (type) {
    case 'CHANGE_SORT':
      if (state.sortBy === sortBy && state.sortOrder === 'asc') {
        return { ...state, sortOrder: 'desc' };
      }

      if (state.sortBy !== sortBy) {
        return { ...state, sortOrder: 'asc', sortBy };
      }

      if (state.sortBy === sortBy && state.sortOrder === 'desc') {
        return { ...state, sortOrder: 'asc', sortBy: nextElement };
      }

      return state;
    case 'SELECT_ALL':
      return { ...state, rows: updateRows(state.rows, true) };
    case 'SELECT_ROW':
      return {
        ...state,
        rows: updateAtIndex(state.rows, action.index, !action.row._isChecked),
      };
    case 'UNSELECT_ALL':
      return { ...state, rows: updateRows(state.rows, false) };
    default:
      return state;
  }
}

function init(initialState) {
  const updatedRows = initialState.rows.map(row => {
    row._isChecked = false;

    return row;
  });

  return { ...initialState, rows: updatedRows };
}

function Example() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {
      headers,
      rows,
      sortBy: 'id',
      sortOrder: 'asc',
    },
    init,
  );
  const areAllEntriesSelected = state.rows.every(
    row => row._isChecked === true,
  );
  const bulkActionProps = {
    icon: 'trash',
    onConfirm: () => {
      alert('Are you sure you want to delete these entries?');
    },
    translatedNumberOfEntry: 'entry',
    translatedNumberOfEntries: 'entries',
    translatedAction: 'Delete all',
  };

  return (
    <Table
      headers={state.headers}
      bulkActionProps={bulkActionProps}
      onClickRow={(e, data) => {
        console.log(data);
        alert('You have just clicked');
      }}
      onChangeSort={({
        sortBy,
        firstElementThatCanBeSorted,
        isSortEnabled,
      }) => {
        if (isSortEnabled) {
          dispatch({
            type: 'CHANGE_SORT',
            sortBy,
            nextElement: firstElementThatCanBeSorted,
          });
        }
      }}
      onSelect={(row, index) => {
        dispatch({ type: 'SELECT_ROW', row, index });
      }}
      onSelectAll={() => {
        const type = areAllEntriesSelected ? 'UNSELECT_ALL' : 'SELECT_ALL';

        dispatch({ type });
      }}
      rows={state.rows}
      sortBy={state.sortBy}
      sortOrder={state.sortOrder}
      withBulkAction
      rowLinks={[
        {
          icon: 'fa fa-pencil',
          onClick: data => {
            console.log(data);
          },
        },
        {
          icon: 'fa fa-trash',
          onClick: data => {
            console.log(data);
          },
        },
      ]}
    />
  );
}
`;

storiesOf('Custom|Table', module)
  .addDecorator(withStorySource(source))
  .add('Complex', () => <TableStory />);
