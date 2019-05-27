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

function Table(props) {
  return <TableCompo {...props} />;
}

Table.defaultProps = {
  ...commonDefaultProps,
};

Table.propTypes = {
  ...commonPropTypes,
};

export default Table;
