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
  headers,
  onChangeSort,
  onSelectAll,
  rows,
  shouldAddTd,
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
          <td className="checkCell">
            <Checkbox
              onChange={onSelectAll}
              checked={checked}
              someChecked={shouldDisplayNotChecked}
            />
          </td>
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
            <td
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
            </td>
          );
        })}
        {shouldAddTd && <td />}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  headers: [],
  onChangeSort: () => {},
  onSelectAll: () => {},
  rows: [],
  shouldAddTd: false,
  sortBy: null,
  sortOrder: 'asc',
  withBulkAction: false,
};

TableHeader.propTypes = {
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
  shouldAddTd: PropTypes.bool,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  withBulkAction: PropTypes.bool,
};

export default TableHeader;
