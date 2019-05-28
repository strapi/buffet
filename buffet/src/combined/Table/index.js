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

import TableCompo from '../../components/Table';
import Card from '../../styled/Card';

function Table(props) {
  return (
    <>
      <Card>
        <TableCompo {...props} />
      </Card>
      {/* <Paging count={12} page={1} range={5} /> */}
    </>
  );
}

Table.defaultProps = {
  ...commonDefaultProps,
};

Table.propTypes = {
  ...commonPropTypes,
};

export default Table;
