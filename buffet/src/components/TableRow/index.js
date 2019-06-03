/**
 *
 * TableRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isObject } from 'lodash';
import StyledTableRow from '../../styled/TableRow';
import Checkbox from '../../styled/Checkbox';
import StyledLinks from '../../styled/Links';

function TableRow({ headers, onSelect, row, rowLinks, withBulkAction }) {
  const displayedCells = headers.map(header => header.value);

  return (
    <StyledTableRow>
      {withBulkAction && (
        <td>
          <Checkbox onChange={onSelect} checked={row._isChecked} />
        </td>
      )}
      {displayedCells.map(cellName => {
        const displayedValue = !isObject(row[cellName]) ? row[cellName] : '-';

        return (
          <td key={cellName} className={`${cellName}-cell`}>
            <p>{displayedValue || '-'}</p>
          </td>
        );
      })}
      {rowLinks.length > 0 && (
        <td>
          <div style={{ width: 'fit-content', float: 'right' }}>
            <StyledLinks>
              {rowLinks.map(icon => (
                <button
                  key={icon.icon}
                  onClick={() => icon.onClick(row)}
                  type="button"
                >
                  <i className={`${icon.icon} link-icon`} />
                </button>
              ))}
            </StyledLinks>
          </div>
        </td>
      )}
    </StyledTableRow>
  );
}

TableRow.defaultProps = {
  headers: {},
  onSelect: () => {},
  row: [],
  rowLinks: [],
  withBulkAction: false,
};

TableRow.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      isSortEnabled: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  onSelect: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.object,

  rowLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
    }),
  ),
  withBulkAction: PropTypes.bool,
};

export default TableRow;
