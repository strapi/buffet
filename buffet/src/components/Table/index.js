/**
 *
 * Table
 *
 */

import React from 'react';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/table';

import StyledTable from '../../styled/Table';
import TableRow from '../TableRow';

function Table({ items, customRowComponent }) {
  return (
    <StyledTable>
      <table>
        <tbody>
          {items.map(item =>
            customRowComponent ? (
              <React.Fragment key={JSON.stringify(item)}>
                {customRowComponent(item)}
              </React.Fragment>
            ) : (
              <TableRow cells={item} key={JSON.stringify(item)} />
            ),
          )}
        </tbody>
      </table>
    </StyledTable>
  );
}

Table.defaultProps = {
  ...commonDefaultProps,
};

Table.propTypes = {
  ...commonPropTypes,
};

export default Table;
