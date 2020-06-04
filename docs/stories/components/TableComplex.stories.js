import React, { useReducer } from 'react';
import { sortBy as sort } from 'lodash';
/* eslint-disable  */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Table } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'First name',
    value: 'firstname',
    isSortEnabled: true,
  },
  {
    name: 'Last name',
    value: 'lastname',
    isSortEnabled: true,
  },
  {
    name: 'Best recipe',
    value: 'recipe',
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
    recipe: 'Ratatouille',
    restaurant: 'Le Gaya',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    recipe: 'Beef bourguignon',
    restaurant: 'Le Georges Blanc',
  },
  {
    id: 3,
    firstname: 'Mars',
    lastname: 'Veyrat',
    recipe: 'Lemon Chicken',
    restaurant: 'La Ferme de mon père',
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
  const [state, dispatch] = useReducer(
    reducer,
    {
      headers,
      rows,
      sortBy: 'id',
      sortOrder: 'asc',
    },
    init
  );
  const areAllEntriesSelected = state.rows.every(
    row => row._isChecked === true
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

  const sortedRowsBy = sort(state.rows, [state.sortBy]);
  const sortedRows =
    state.sortOrder === 'asc' ? sortedRowsBy : sortedRowsBy.reverse();

  return (
    <Presentation title="Table" description="Useful to display data.">
      <div style={{ paddingTop: 3, marginBottom: 35 }}>
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
            alert(`You have just clicked on ${data.firstname} row`);
          }}
          onSelect={(row, index) => {
            dispatch({ type: 'SELECT_ROW', row, index });
          }}
          onSelectAll={() => {
            const type = areAllEntriesSelected ? 'UNSELECT_ALL' : 'SELECT_ALL';

            dispatch({ type });
          }}
          rows={sortedRows}
          sortBy={state.sortBy}
          sortOrder={state.sortOrder}
          showActionCollapse
          withBulkAction
          rowLinks={[
            {
              icon: <FontAwesomeIcon icon={faPencilAlt} />,
              onClick: data => {
                alert(`Do you want to edit ${data.firstname}?`);
              },
            },
            {
              icon: <FontAwesomeIcon icon={faTrashAlt} />,
              onClick: data => {
                alert(`Do you want to delete ${data.firstname}?`);
              },
            },
          ]}
        />
      </div>
      <Pre>{source}</Pre>
    </Presentation>
  );
}

const source = `
import React, { useReducer } from 'react';
import { Table } from '@buffetjs/core';
import { sortBy as sort } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const headers = [
  {
    name: 'Id',
    value: 'id',
    isSortEnabled: true,
  },
  {
    name: 'First name',
    value: 'firstname',
    isSortEnabled: true,
  },
  {
    name: 'Last name',
    value: 'lastname',
    isSortEnabled: true,
  },
  {
    name: 'Best recipe',
    value: 'recipe',
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
    recipe: 'Ratatouille',
    restaurant: 'Le Gaya',
  },
  {
    id: 2,
    firstname: 'Georges',
    lastname: 'Blanc',
    recipe: 'Beef bourguignon',
    restaurant: 'Le Georges Blanc',
  },
  {
    id: 3,
    firstname: 'Mars',
    lastname: 'Veyrat',
    recipe: 'Lemon Chicken',
    restaurant: 'La Ferme de mon père',
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
  const [state, dispatch] = useReducer(
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
  const sortedRowsBy = sort(state.rows, [state.sortBy]);
  const sortedRows =
    state.sortOrder === 'asc' ? sortedRowsBy : sortedRowsBy.reverse();

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
      rows={sortedRows}
      showActionCollapse
      sortBy={state.sortBy}
      sortOrder={state.sortOrder}
      withBulkAction
      rowLinks={[
        {
          icon: <FontAwesomeIcon icon={faPencilAltl} />,
          onClick: data => {
            console.log(data);
          },
        },
        {
          icon: <FontAwesomeIcon icon={faTrashAlt} />,
          onClick: data => {
            console.log(data);
          },
        },
      ]}
    />
  );
}
`;

storiesOf('Components|Table', module).add('Complex', () => <TableStory />);
