/**
 *
 * TableRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledTableRow from '../../styled/TableRow';

function TableRow({ cells, onClick }) {
  return (
    <StyledTableRow onClick={onClick}>
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
  onClick: () => {},
};
TableRow.propTypes = {
  cells: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
};

export default TableRow;
