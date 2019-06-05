/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledTable from '../../styled/Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableRowEmpty from '../../styled/TableRowEmpty';
import ActionCollapse from './ActionCollapse';

function Table({
  bulkActionProps,
  customRow,
  headers,
  onChangeSort,
  onClickRow,
  onSelect,
  onSelectAll,
  rows,
  rowLinks,
  sortBy,
  sortOrder,
  tableEmptyText,
  withBulkAction,
}) {
  let colSpan = withBulkAction ? headers.length + 1 : headers.length;

  if (rowLinks.length > 0) {
    colSpan += 1;
  }

  const areAllEntriesSelected =
    rows.length > 0 && rows.some(row => row._isChecked === true);
  const shouldDisplayEmptyRow = rows.length === 0;

  return (
    <StyledTable>
      <table className="">
        <TableHeader
          headers={headers}
          onChangeSort={onChangeSort}
          onSelectAll={onSelectAll}
          rows={rows}
          shouldAddTd={rowLinks.length > 0}
          sortBy={sortBy}
          sortOrder={sortOrder}
          withBulkAction={withBulkAction}
        />
        <tbody>
          {withBulkAction && areAllEntriesSelected && (
            <ActionCollapse
              colSpan={colSpan}
              numberOfSelectedEntries={
                rows.filter(row => row._isChecked === true).length
              }
              {...bulkActionProps}
            />
          )}
          {shouldDisplayEmptyRow && (
            <TableRowEmpty>
              <td colSpan={colSpan}>{tableEmptyText}</td>
            </TableRowEmpty>
          )}
          {!shouldDisplayEmptyRow &&
            rows.map((row, index) => {
              if (customRow) {
                const Row = customRow;

                return (
                  <React.Fragment key={JSON.stringify(row)}>
                    <Row row={row} headers={headers} onSelect={onSelect} />
                  </React.Fragment>
                );
              }

              return (
                <TableRow
                  key={JSON.stringify(row)}
                  headers={headers}
                  onClick={onClickRow}
                  onSelect={() => {
                    onSelect(row, index);
                  }}
                  row={row}
                  rowLinks={rowLinks}
                  withBulkAction={withBulkAction}
                />
              );
            })}
        </tbody>
      </table>
    </StyledTable>
  );
}

Table.defaultProps = {
  bulkActionProps: {
    icon: 'trash',
    onConfirm: () => {},
    translatedNumberOfEntry: 'entry',
    translatedNumberOfEntries: 'entries',
    translatedAction: 'Delete all',
  },
  customRow: null,
  headers: [],
  onChangeSort: () => {},
  onClickRow: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
  rows: [],
  rowLinks: [],
  sortBy: null,
  sortOrder: 'asc',
  tableEmptyText: 'There is no data',
  withBulkAction: false,
};

Table.propTypes = {
  bulkActionProps: PropTypes.shape({
    icon: PropTypes.string,
    onConfirm: PropTypes.func,
    translatedAction: PropTypes.string,
    translatedNumberOfEntries: PropTypes.string,
    translatedNumberOfEntry: PropTypes.string,
  }),
  customRow: PropTypes.func,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),

  onChangeSort: PropTypes.func,
  onClickRow: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectAll: PropTypes.func,
  rowLinks: PropTypes.instanceOf(Array),
  rows: PropTypes.instanceOf(Array),
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  tableEmptyText: PropTypes.string,
  withBulkAction: PropTypes.bool,
};

export default Table;
