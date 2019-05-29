/**
 *
 * ListRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledListRow from '../../styled/ListRow';

function ListRow({ cells, onClick }) {
  return (
    <StyledListRow onClick={onClick}>
      {Object.keys(cells).map(key => (
        <td key={key} className={`${key}-cell`}>
          <p>{cells[key]}</p>
        </td>
      ))}
    </StyledListRow>
  );
}

ListRow.defaultProps = {
  cells: {},
  onClick: () => {},
};

ListRow.propTypes = {
  cells: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
};

export default ListRow;
