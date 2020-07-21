/**
 *
 * TableHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Checkbox } from '@buffetjs/styles';
import Icon from '../Icon';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
function TableHeader({
  addCell,
  headers,
  onChangeSort,
  onSelectAll,
  rows,
  sortBy,
  sortOrder,
  withBulkAction,
}) {
  const checked = rows.length > 0 && rows.every(row => row._isChecked === true);
  const shouldDisplayNotChecked =
    rows.some(row => row._isChecked === true) && !checked;

  return (
    <thead>
      <tr>
        {withBulkAction && (
          <th className="checkCell">
            <Checkbox
              onChange={onSelectAll}
              checked={checked}
              someChecked={shouldDisplayNotChecked}
            />
          </th>
        )}
        {headers.map(header => {
          const { isSortEnabled, name, value } = header;
          const shouldDisplaySort = isSortEnabled && sortBy === value;
          const firstElementThatCanBeSorted = get(
            headers.filter(h => h.isSortEnabled),
            [0, 'value'],
            null
          );

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <th
              key={value}
              onClick={() => {
                onChangeSort({
                  sortBy: value,
                  firstElementThatCanBeSorted,
                  isSortEnabled,
                });
              }}
            >
              <p className={isSortEnabled ? 'clickable' : ''}>
                {name}
                {shouldDisplaySort && <Icon icon={sortOrder || 'asc'} />}
              </p>
            </th>
          );
        })}
        {addCell && <th />}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  addCell: false,
  headers: [],
  onChangeSort: () => {},
  onSelectAll: () => {},
  rows: [],
  sortBy: null,
  sortOrder: 'asc',
  withBulkAction: false,
};

TableHeader.propTypes = {
  addCell: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onChangeSort: PropTypes.func,
  onSelectAll: PropTypes.func,
  rows: PropTypes.instanceOf(Array),
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  withBulkAction: PropTypes.bool,
};

export default TableHeader;
