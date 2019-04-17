/**
 *
 * ListRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledListRow from '../../styled/ListRow';

function ListRow({ cells, onClick, schema }) {
  const tableSchema = schema || cells;

  return (
    <StyledListRow onClick={onClick}>
      {Object.keys(tableSchema).map(key => (
        <td key={key} className={`${key}-cell`}>
          {key === 'icon' ? <i className={cells[key]} /> : cells[key]}
        </td>
      ))}
    </StyledListRow>
  );
}

ListRow.defaultProps = {
  cells: null,
  onClick: () => {},
  schema: null,
};

ListRow.propTypes = {
  cells: PropTypes.object,
  onClick: PropTypes.func,
  schema: PropTypes.object,
};

export default ListRow;
