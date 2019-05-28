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

function TableRow({ cells, checkEnabled, isCheck, onClick, onSelect }) {
  return (
    <StyledTableRow onClick={onClick}>
      {checkEnabled && (
        <td>
          <Checkbox onChange={onSelect} checked={isCheck} />
        </td>
      )}
      {Object.keys(cells).map(key => (
        <td key={key} className={`${key}-cell`}>
          <p>{!isObject(cells[key]) && cells[key]}</p>
        </td>
      ))}
    </StyledTableRow>
  );
}

TableRow.defaultProps = {
  cells: null,
  checkEnabled: false,
  isCheck: false,
  onClick: () => {},
  onSelect: () => {},
};
TableRow.propTypes = {
  cells: PropTypes.instanceOf(Object),
  checkEnabled: PropTypes.bool,
  isCheck: PropTypes.bool,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
};

export default TableRow;
