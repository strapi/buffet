/**
 *
 * TableRow
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${colors.greyHover};
  }
  td {
  }
`;

export default TableRow;
