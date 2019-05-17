/**
 *
 * TableRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledTableRow from '../../styled/TableRow';
import Checkbox from '../../styled/Checkbox';

function TableRow({ cells, checkEnabled, onClick }) {
  return (
    <StyledTableRow onClick={onClick}>
      {checkEnabled && (
        <td>
          <Checkbox />
        </td>
      )}
      {Object.keys(cells).map(key => (
        <td key={key} className={`${key}-cell`}>
          <p>{cells[key]}</p>
        </td>
      ))}
    </StyledTableRow>
  );
}

TableRow.defaultProps = {
  cells: null,
  checkEnabled: false,
  onClick: () => {},
};
TableRow.propTypes = {
  cells: PropTypes.instanceOf(Object),
  checkEnabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TableRow;
