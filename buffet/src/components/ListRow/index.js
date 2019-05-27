/**
 *
 * ListRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledListRow from '../../styled/ListRow';
import Checkbox from '../../styled/Checkbox';

function ListRow({ cells, onClick, checkEnabled }) {
  return (
    <StyledListRow onClick={onClick}>
      {checkEnabled && (
        <td>
          <Checkbox name={cells.id} />
        </td>
      )}
      {Object.keys(cells).map(key => (
        <td key={key} className={`${key}-cell`}>
          <p>{cells[key]}</p>
        </td>
      ))}
    </StyledListRow>
  );
}

ListRow.defaultProps = {
  cells: null,
  checkEnabled: false,
  onClick: () => {},
};

ListRow.propTypes = {
  cells: PropTypes.instanceOf(Object),
  checkEnabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListRow;
