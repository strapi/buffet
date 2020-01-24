/**
 *
 * Table
 *
 */

import React, { useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Table as StyledTable, TableRowEmpty } from '@buffetjs/styles';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import ActionCollapse from './ActionCollapse';

function Table({
  bulkActionProps,
  className,
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

  const checkedRows = useMemo(
    () => rows.filter(row => row._isChecked === true),
    [rows]
  );

  const rowsLength = rows.length;
  const checkedLength = checkedRows.length;
  const areSomeRowsSelected = rowsLength > 0 && checkedLength > 0;
  const areAllRowsSelected = rowsLength === checkedLength;
  const shouldDisplayEmptyRow = rowsLength === 0;

  return (
    <StyledTable className={className}>
      <table className="">
        <TableHeader
          headers={headers}
          onChangeSort={onChangeSort}
          onSelectAll={onSelectAll}
          areAllRowsSelected={areAllRowsSelected}
          areSomeRowsSelected={areSomeRowsSelected}
          shouldAddTd={rowLinks.length > 0}
          sortBy={sortBy}
          sortOrder={sortOrder}
          withBulkAction={withBulkAction}
        />
        <tbody>
          {withBulkAction && areSomeRowsSelected && (
            <ActionCollapse
              colSpan={colSpan}
              numberOfSelectedEntries={checkedRows.length}
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
            const key = row.id || `key${index}`;

            if (customRow) {
              const Row = customRow;

              return (
                <Fragment key={JSON.stringify(row)}>
                  <Row row={row} headers={headers} onSelect={onSelect} />
                </Fragment>
              );
            }

            return (
              <TableRow
                key={key}
                headers={headers}
                onClick={onClickRow}
                onSelect={() => onSelect(row, index)}
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
  className: null,
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
  className: PropTypes.string,
  customRow: PropTypes.func,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    })
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
