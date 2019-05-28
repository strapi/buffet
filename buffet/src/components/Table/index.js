/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/table';

import StyledTable from '../../styled/Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableRowEmpty from '../../styled/TableRowEmpty';
import ActionCollapse from './ActionCollapse';

function Table({
  actionCollapseInfos,
  customRowComponent,
  headers,
  isCheckEnabled,
  items,
  onSelect,
  onSelectAll,
  sortBy,
  sortOrder,
  onChangeSort,
}) {
  const headerCells = customRowComponent ? headers : Object.keys(items);
  const numberOfSelectedEntries = items.filter(item => item.isCheck === true)
    .length;
  const showDeleteAll = numberOfSelectedEntries > 0;

  return (
    <StyledTable>
      <table className={showDeleteAll ? 'rowsSelected' : ''}>
        <TableHeader
          cells={headerCells}
          isCheckEnabled={isCheckEnabled}
          rows={items}
          onSelectAll={onSelectAll}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onChangeSort={onChangeSort}
        />

        <tbody>
          {items.length > 0 ? (
            items.map((item, index) =>
              customRowComponent ? (
                <React.Fragment key={JSON.stringify(item)}>
                  {customRowComponent({
                    item,
                    onSelect: () => {
                      onSelect(item, index);
                    },
                  })}
                </React.Fragment>
              ) : (
                <TableRow
                  id={index}
                  cells={item}
                  isCheckEnabled={isCheckEnabled}
                  onSelect={onSelect}
                  key={JSON.stringify(item)}
                />
              ),
            )
          ) : (
            <TableRowEmpty />
          )}
        </tbody>
      </table>
      {showDeleteAll && (
        <ActionCollapse
          numberOfSelectedEntries={numberOfSelectedEntries}
          {...actionCollapseInfos}
        />
      )}
    </StyledTable>
  );
}

Table.defaultProps = {
  ...commonDefaultProps,
  actionCollapseInfos: null,
};

Table.propTypes = {
  ...commonPropTypes,
  actionCollapseInfos: PropTypes.bool,
};

export default Table;
