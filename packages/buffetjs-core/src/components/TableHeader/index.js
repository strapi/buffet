/**
 *
 * TableHeader
 *
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Checkbox } from '@buffetjs/styles';
import Icon from '../Icon';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
function TableHeader({
  headers,
  onChangeSort,
  onSelectAll,
  shouldAddTd,
  sortBy,
  sortOrder,
  withBulkAction,
  areAllRowsSelected,
  areSomeRowsSelected,
}) {
  return (
    <thead>
      <tr>
        {withBulkAction && (
          <td className="checkCell">
            <Checkbox
              onChange={onSelectAll}
              checked={areAllRowsSelected}
              shouldDisplayNotChecked={areSomeRowsSelected}
            />
          </td>
        )}
        {useMemo(
          () =>
            headers.map(header => {
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
            }),
          [headers, sortBy, sortOrder, onChangeSort]
        )}
        {shouldAddTd && <td />}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  areAllRowsSelected: false,
  areSomeRowsSelected: false,
  headers: [],
  onChangeSort: () => {},
  onSelectAll: () => {},
  shouldAddTd: false,
  sortBy: null,
  sortOrder: 'asc',
  withBulkAction: false,
};

TableHeader.propTypes = {
  areAllRowsSelected: PropTypes.bool,
  areSomeRowsSelected: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onChangeSort: PropTypes.func,
  onSelectAll: PropTypes.func,
  shouldAddTd: PropTypes.bool,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  withBulkAction: PropTypes.bool,
};

export default TableHeader;
