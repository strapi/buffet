/**
 *
 * TableRow
 *
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isObject } from 'lodash';
import { Checkbox, Links as StyledLinks } from '@buffetjs/styles';
import Icon from '../Icon';

function TableRow({
  headers,
  onClick,
  onSelect,
  row,
  rowLinks,
  withBulkAction,
}) {
  const displayedCells = useMemo(
    () =>
      headers
        .map(({ value }) => value)
        .map(cellName => {
          const displayedValue = !isObject(row[cellName]) ? row[cellName] : '-';

          return (
            <td key={cellName} className={`${cellName}-cell`}>
              <p>{displayedValue || '-'}</p>
            </td>
          );
        }),
    [headers, row]
  );

  return (
    <tr
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e, row);
      }}
    >
      {withBulkAction && (
        <td>
          <Checkbox
            onClick={e => {
              e.stopPropagation();
            }}
            onChange={onSelect}
            checked={row._isChecked}
          />
        </td>
      )}
      {displayedCells}
      {rowLinks.length > 0 && (
        <td>
          <div style={{ width: 'fit-content', float: 'right' }}>
            <StyledLinks>
              {rowLinks.map((icon, index) => (
                <button
                  // eslint-disable-next-line react/no-array-index-key
                  key={index + icon}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    icon.onClick(row);
                  }}
                  type="button"
                >
                  <Icon className="link-icon" icon={icon.icon} />
                </button>
              ))}
            </StyledLinks>
          </div>
        </td>
      )}
    </tr>
  );
}

TableRow.defaultProps = {
  headers: [],
  onClick: () => {},
  onSelect: () => {},
  row: {},
  rowLinks: [],
  withBulkAction: false,
};

TableRow.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.object,
  rowLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
    })
  ),
  withBulkAction: PropTypes.bool,
};

export default TableRow;
