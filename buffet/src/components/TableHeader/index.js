/**
 *
 * TableHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../styled/Checkbox';

function TableHeader({ cells, checkEnabled }) {
  return (
    <thead>
      <tr>
        {checkEnabled && (
          <td>
            <Checkbox />
          </td>
        )}

        {cells.length > 0 ? (
          Object.keys(cells[0]).map(key => (
            <td key={key} className={`${key}-cell`}>
              <p>{key}</p>
            </td>
          ))
        ) : (
          <td>
            <p>id</p>
          </td>
        )}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  cells: null,
  checkEnabled: false,
};

TableHeader.propTypes = {
  cells: PropTypes.instanceOf(Object),
  checkEnabled: PropTypes.bool,
};

export default TableHeader;
