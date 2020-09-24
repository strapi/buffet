/**
 *
 * TableRowEmpty
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const TableRowEmpty = styled.tr`
  width: 100%;
  height: 108px;
  background: #ffffff;
  td {
    height: 106px;
    line-height: 106px;
    font-size: 1.3rem;
    font-weight: ${sizes.fontWeight.regular};
    color: ${colors.blueTxt};
    text-align: center;
    border-collapse: collapse;
    /* stylelint-disable */
    border-top: 1px solid #f1f1f2 !important;
    /* stylelint-enable */
  }
`;

export default TableRowEmpty;
