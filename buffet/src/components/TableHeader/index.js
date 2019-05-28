/**
 *
 * TableHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../styled/Checkbox';

function TableHeader({
  cells,
  isCheckEnabled,
  onSelectAll,
  rows,
  sortBy,
  sortOrder,
  onChangeSort,
}) {
  // etat manquant
  const checkValue = rows.length > 0 && rows.every(row => row.isCheck === true);
  const shouldDisplayNotChecked =
    rows.some(row => row.isCheck === true) && !checkValue;

  return (
    <thead>
      <tr>
        {isCheckEnabled && (
          <td className="checkCell">
            <Checkbox
              onChange={onSelectAll}
              checked={checkValue}
              shouldDisplayNotChecked={shouldDisplayNotChecked}
            />
          </td>
        )}
        {cells.length > 0 ? (
          cells.map(cell => {
            const { displayValue, value, isSortEnabled } = cell;
            const shouldDisplaySort = isSortEnabled && sortBy === value;
            const firstSort = cells.filter(item => item.isSortEnabled)[0].value;

            return (
              <td
                key={JSON.stringify(cell)}
                onClick={() => onChangeSort(value, firstSort, isSortEnabled)}
              >
                <p>
                  {displayValue}
                  {shouldDisplaySort && (
                    <i className={`fa fa-sort-${sortOrder || 'asc'}`} />
                  )}
                </p>
              </td>
            );
          })
        ) : (
          <td>
            <p>id</p>
          </td>
        )}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  cells: [],
  isCheckEnabled: false,
  onChangeSort: () => {},
  onSelectAll: () => {},
  rows: [],
  sortBy: null,
  sortOrder: null,
};

TableHeader.propTypes = {
  cells: PropTypes.array,
  isCheckEnabled: PropTypes.bool,
  onChangeSort: PropTypes.func,
  onSelectAll: PropTypes.func,
  rows: PropTypes.instanceOf(Object),
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
};

export default TableHeader;
